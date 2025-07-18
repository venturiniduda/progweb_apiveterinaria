import { Prontuario } from '../../model/prontuario.model';  
import { Consulta } from '../../model/consulta.model'; 

describe('Prontuario Model', () => {
  it('should create a prontuario with valid fields', () => {
    const consulta = new Consulta();  
    consulta.consulta_id = 1;  // Atribuindo um valor para a consulta

    const prontuario = new Prontuario();
    prontuario.prontuario_id = 1;
    prontuario.consulta = consulta; // Atribuindo a consulta relacionada
    prontuario.consulta_id = consulta.consulta_id;  // Atribuindo a chave estrangeira
    prontuario.tipo_atendimento = 'Emergencial';
    prontuario.queixa_principal = 'Dificuldade respiratória';
    prontuario.historico_medico = 'Sem histórico relevante';
    prontuario.sistema_afetado = 'Respiratório';
    prontuario.detalhes_clinicos = 'Paciente com dificuldade para respirar, sem febre';
    prontuario.criado_em = new Date();

    // Verifica se os valores foram atribuídos corretamente
    expect(prontuario.prontuario_id).toBe(1);
    expect(prontuario.consulta).toBe(consulta);  // Verificando o relacionamento
    expect(prontuario.consulta_id).toBe(consulta.consulta_id); 
    expect(prontuario.tipo_atendimento).toBe('Emergencial');
    expect(prontuario.queixa_principal).toBe('Dificuldade respiratória');
    expect(prontuario.historico_medico).toBe('Sem histórico relevante');
    expect(prontuario.sistema_afetado).toBe('Respiratório');
    expect(prontuario.detalhes_clinicos).toBe('Paciente com dificuldade para respirar, sem febre');
    expect(prontuario.criado_em).toBeInstanceOf(Date);
  });

  it('should have required fields defined', () => {
    const prontuario = new Prontuario();
    prontuario.tipo_atendimento = 'Consulta de rotina';
    prontuario.queixa_principal = 'Dor nas costas';
    prontuario.historico_medico = 'Sem histórico relevante';
    prontuario.sistema_afetado = 'Musculoesquelético';
    prontuario.detalhes_clinicos = 'Paciente com dor muscular na região lombar';
    prontuario.criado_em = new Date();

    expect(prontuario).toHaveProperty('tipo_atendimento');
    expect(prontuario).toHaveProperty('queixa_principal');
    expect(prontuario).toHaveProperty('historico_medico');
    expect(prontuario).toHaveProperty('sistema_afetado');
    expect(prontuario).toHaveProperty('detalhes_clinicos');
    expect(prontuario).toHaveProperty('criado_em');
  });

  it('should correctly handle ManyToOne relationship with Consulta', () => {
    const consulta = new Consulta();  
    consulta.consulta_id = 1;  
    
    const prontuario = new Prontuario();
    prontuario.consulta = consulta;
    prontuario.consulta_id = consulta.consulta_id;

    // Verificando se o relacionamento ManyToOne foi atribuído corretamente
    expect(prontuario.consulta).toBe(consulta);
    expect(prontuario.consulta_id).toBe(consulta.consulta_id);
  });
});