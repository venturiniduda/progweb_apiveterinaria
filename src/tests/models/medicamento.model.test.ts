import { Medicamento } from '../../model/medicamento.model'; 
import { Estoque } from '../../model/estoque.model';  

describe('Medicamento Model', () => {
  
  it('should create a medicamento with valid fields', () => {
    const estoque = new Estoque();
    estoque.estoque_id = 1;  

    const medicamento = new Medicamento();
    medicamento.med_id = 1;
    medicamento.nome = 'Paracetamol';
    medicamento.principio_ativo = 'Paracetamol';
    medicamento.codigo_registro = '123456789';
    medicamento.categoria = 'Analgesico';
    medicamento.posologia = '1 comprimido a cada 6 horas';
    medicamento.via_administracao = 'Oral';
    medicamento.fabricante = 'Fabricante X';
    medicamento.codigo_barras = '7891234567890';
    medicamento.preco_unitario = 10.99;
    medicamento.prescricao_obrigatoria = 'S';
    medicamento.criado_em = new Date();
    medicamento.estoque = estoque;

    // Verifica se os valores foram atribuídos corretamente
    expect(medicamento.med_id).toBe(1);
    expect(medicamento.nome).toBe('Paracetamol');
    expect(medicamento.principio_ativo).toBe('Paracetamol');
    expect(medicamento.codigo_registro).toBe('123456789');
    expect(medicamento.categoria).toBe('Analgesico');
    expect(medicamento.posologia).toBe('1 comprimido a cada 6 horas');
    expect(medicamento.via_administracao).toBe('Oral');
    expect(medicamento.fabricante).toBe('Fabricante X');
    expect(medicamento.codigo_barras).toBe('7891234567890');
    expect(medicamento.preco_unitario).toBe(10.99);
    expect(medicamento.prescricao_obrigatoria).toBe('S');
    expect(medicamento.criado_em).toBeInstanceOf(Date);
    expect(medicamento.estoque).toBe(estoque);
  });

  it('should have required fields defined', () => {
    const medicamento = new Medicamento();
    medicamento.nome = 'Ibuprofeno';
    medicamento.principio_ativo = 'Ibuprofeno';
    medicamento.codigo_registro = '987654321';
    medicamento.categoria = 'Antiinflamatório';
    medicamento.posologia = '2 comprimidos a cada 8 horas';
    medicamento.via_administracao = 'Oral';
    medicamento.fabricante = 'Fabricante Y';
    medicamento.codigo_barras = '7899876543210';
    medicamento.preco_unitario = 25.5;
    medicamento.prescricao_obrigatoria = 'N';
    medicamento.criado_em = new Date();

    expect(medicamento).toHaveProperty('nome');
    expect(medicamento).toHaveProperty('principio_ativo');
    expect(medicamento).toHaveProperty('codigo_registro');
    expect(medicamento).toHaveProperty('categoria');
    expect(medicamento).toHaveProperty('posologia');
    expect(medicamento).toHaveProperty('via_administracao');
    expect(medicamento).toHaveProperty('fabricante');
    expect(medicamento).toHaveProperty('codigo_barras');
    expect(medicamento).toHaveProperty('preco_unitario');
    expect(medicamento).toHaveProperty('prescricao_obrigatoria');
    expect(medicamento).toHaveProperty('criado_em');
  });

  it('should correctly handle ManyToOne relationship with Estoque', () => {
    const estoque = new Estoque();  // Criando uma instância de Estoque
    estoque.estoque_id = 1;  // Atribuindo um valor fictício

    const medicamento = new Medicamento();
    medicamento.estoque = estoque;  // Relacionamento ManyToOne com Estoque

    expect(medicamento.estoque).toBe(estoque);
  });

  it('should handle the criado_em as Date type', () => {
    const medicamento = new Medicamento();
    medicamento.criado_em = new Date();

    // Verificando se criado_em é uma instância de Date
    expect(medicamento.criado_em).toBeInstanceOf(Date);
  });
});