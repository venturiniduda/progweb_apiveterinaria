import { Paciente } from '../../model/paciente.model';  
import { Tutor } from '../../model/tutor.model';     
import { Consulta } from '../../model/consulta.model'; 

describe('Paciente Model', () => {
  
  it('should create a paciente with valid fields', () => {
    const tutor = new Tutor();
    tutor.tutor_id = 1;  

    const paciente = new Paciente();
    paciente.animal_id = 1;
    paciente.tutor = tutor;  // Relacionamento ManyToOne com Tutor
    paciente.tutor_id = tutor.tutor_id;  // Atribuindo a chave estrangeira
    paciente.nome = 'Rex';
    paciente.sexo = 'M';
    paciente.raca = 'Labrador';
    paciente.cor_pelagem = 'Amarelo';
    paciente.data_nascimento = new Date('2020-01-01');
    paciente.criado_em = new Date();

    // Verifica se as propriedades foram atribuídas corretamente
    expect(paciente.animal_id).toBe(1);
    expect(paciente.tutor).toBe(tutor);  // Verificando o relacionamento
    expect(paciente.tutor_id).toBe(tutor.tutor_id);  // Verificando a chave estrangeira
    expect(paciente.nome).toBe('Rex');
    expect(paciente.sexo).toBe('M');
    expect(paciente.raca).toBe('Labrador');
    expect(paciente.cor_pelagem).toBe('Amarelo');
    expect(paciente.data_nascimento).toEqual(new Date('2020-01-01'));
    expect(paciente.criado_em).toBeInstanceOf(Date);
  });

  it('should have required fields defined', () => {
    const paciente = new Paciente();
    paciente.nome = 'Rex';
    paciente.sexo = 'M';
    paciente.raca = 'Labrador';
    paciente.cor_pelagem = 'Amarelo';
    paciente.data_nascimento = new Date('2020-01-01');
    paciente.criado_em = new Date();

    expect(paciente).toHaveProperty('nome');
    expect(paciente).toHaveProperty('sexo');
    expect(paciente).toHaveProperty('raca');
    expect(paciente).toHaveProperty('cor_pelagem');
    expect(paciente).toHaveProperty('data_nascimento');
    expect(paciente).toHaveProperty('criado_em');
  });

  it('should correctly handle ManyToOne relationship with Tutor', () => {
    const tutor = new Tutor();  
    tutor.tutor_id = 1;  

    const paciente = new Paciente();
    paciente.tutor = tutor;  
    paciente.tutor_id = tutor.tutor_id;

    // Verificando se o relacionamento ManyToOne foi atribuído corretamente
    expect(paciente.tutor).toBe(tutor);
    expect(paciente.tutor_id).toBe(tutor.tutor_id);
  });

  it('should handle OneToMany relationship with Consulta', () => {
    const consulta = new Consulta();  
    consulta.consulta_id = 1; 

    const paciente = new Paciente();
    paciente.consultas = [consulta];  // Relacionamento OneToMany com Consulta

    // Verificando se o relacionamento OneToMany com Consulta está correto
    expect(paciente.consultas).toBeInstanceOf(Array);
    expect(paciente.consultas.length).toBe(1);
    expect(paciente.consultas[0]).toBe(consulta);
  });
});