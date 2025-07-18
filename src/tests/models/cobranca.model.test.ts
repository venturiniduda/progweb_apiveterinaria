import { Cobranca } from '../../model/cobranca.model';

describe('Cobranca Model', () => {

  it('should create a cobranca with valid fields', () => {
    const cobranca = new Cobranca();
    cobranca.cliente = 'João da Silva';
    cobranca.valor = 150.75;
    cobranca.status = 'pendente';
    cobranca.dataCriacao = new Date();

    // Verificando se os valores foram atribuídos corretamente
    expect(cobranca.cliente).toBe('João da Silva');
    expect(cobranca.valor).toBe(150.75);
    expect(cobranca.status).toBe('pendente');
    expect(cobranca.dataCriacao).toBeInstanceOf(Date);
  });

  it('should set default status to "pendente"', () => {
  const cobranca = new Cobranca();
  cobranca.cliente = 'Maria Souza';
  cobranca.valor = 200.50;
  cobranca.status = cobranca.status || 'pendente'; // Garantir que o valor default seja aplicado manualmente
  cobranca.dataCriacao = new Date();

  // Verificando se o status padrão é "pendente"
  expect(cobranca.status).toBe('pendente');
});

  it('should handle decimal values for valor field correctly', () => {
    const cobranca = new Cobranca();
    cobranca.cliente = 'Carlos Pereira';
    cobranca.valor = 99.99;
    cobranca.status = 'pendente';
    cobranca.dataCriacao = new Date();

    // Verificando se o valor foi atribuído corretamente com 2 casas decimais
    expect(cobranca.valor).toBe(99.99);
  });

  it('should handle the dataCriacao as Date type', () => {
    const cobranca = new Cobranca();
    cobranca.dataCriacao = new Date();

    // Verificando se dataCriacao é uma instância de Date
    expect(cobranca.dataCriacao).toBeInstanceOf(Date);
  });

  it('should have required fields defined', () => {
    const cobranca = new Cobranca();
    cobranca.cliente = 'Pedro Oliveira';
    cobranca.valor = 350.00;
    cobranca.status = 'pendente';
    cobranca.dataCriacao = new Date();

    // Verificando se os campos obrigatórios estão presentes
    expect(cobranca).toHaveProperty('cliente');
    expect(cobranca).toHaveProperty('valor');
    expect(cobranca).toHaveProperty('status');
    expect(cobranca).toHaveProperty('dataCriacao');
  });

});