import { Notificacao } from '../../model/notificacao.model'; 

describe('Notificacao Model', () => {

  it('should create a notificacao with valid fields', () => {
    const notificacao = new Notificacao();
    notificacao.id = 1;
    notificacao.mensagem = 'Consulta agendada para amanhã';
    notificacao.tipo = 'Lembrete';
    notificacao.dataEnvio = new Date();

    // Verificando se as propriedades estão corretamente atribuídas
    expect(notificacao.id).toBe(1);
    expect(notificacao.mensagem).toBe('Consulta agendada para amanhã');
    expect(notificacao.tipo).toBe('Lembrete');
    expect(notificacao.dataEnvio).toBeInstanceOf(Date);
  });

  it('should have required fields defined', () => {
    const notificacao = new Notificacao();
    notificacao.mensagem = 'Exame realizado com sucesso';
    notificacao.tipo = 'Resultado';
    notificacao.dataEnvio = new Date();

    // Verificando se as propriedades obrigatórias estão presentes
    expect(notificacao).toHaveProperty('mensagem');
    expect(notificacao).toHaveProperty('tipo');
    expect(notificacao).toHaveProperty('dataEnvio');
  });

  it('should handle the dataEnvio as Date type', () => {
    const notificacao = new Notificacao();
    notificacao.mensagem = 'Alerta de vacinação';
    notificacao.tipo = 'Aviso';
    notificacao.dataEnvio = new Date();

    // Verificando se dataEnvio é uma instância de Date
    expect(notificacao.dataEnvio).toBeInstanceOf(Date);
  });
});