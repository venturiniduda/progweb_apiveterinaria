import Consulta from '../../model/consulta.model';
import Paciente from '../../model/paciente.model';
import { Tutor } from '../../model/tutor.model';

describe('Tutor Model', () => {
  it('should create a tutor with valid fields', () => {
    const tutor = new Tutor();
    tutor.tutor_id = 1;
    tutor.nome = 'João';
    tutor.sobrenome = 'Silva';
    tutor.cpf = '12345678901';
    tutor.data_nascimento = new Date('1980-01-01');
    tutor.rua = 'Rua ABC';
    tutor.numero = 123;
    tutor.bairro = 'Centro';
    tutor.cidade = 'São Paulo';
    tutor.complemento = 'Apartamento 10';
    tutor.email = 'joao.silva@example.com';
    tutor.telefone = '11999999999';
    tutor.criado_em = new Date();

    // Verifica se os valores foram atribuídos corretamente
    expect(tutor.tutor_id).toBe(1);
    expect(tutor.nome).toBe('João');
    expect(tutor.sobrenome).toBe('Silva');
    expect(tutor.cpf).toBe('12345678901');
    expect(tutor.data_nascimento).toEqual(new Date('1980-01-01'));
    expect(tutor.rua).toBe('Rua ABC');
    expect(tutor.numero).toBe(123);
    expect(tutor.bairro).toBe('Centro');
    expect(tutor.cidade).toBe('São Paulo');
    expect(tutor.complemento).toBe('Apartamento 10');
    expect(tutor.email).toBe('joao.silva@example.com');
    expect(tutor.telefone).toBe('11999999999');
  });

  it('should correctly initialize relations with Paciente and Consulta', () => {
    const tutor = new Tutor();
    const paciente = new Paciente();
    const consulta = new Consulta();
    
    tutor.pacientes = [paciente];
    tutor.consultas = [consulta];
    
    expect(tutor.pacientes).toBeInstanceOf(Array);
    expect(tutor.consultas).toBeInstanceOf(Array);
    expect(tutor.pacientes.length).toBe(1);
    expect(tutor.consultas.length).toBe(1);
  });

  it('should have required fields defined', () => {
    const tutor = new Tutor();
    tutor.nome = 'João'; 
    tutor.cpf = '12345678901';
    tutor.data_nascimento = new Date('1980-01-01'); 
    
    expect(tutor).toHaveProperty('nome');
    expect(tutor).toHaveProperty('cpf');
    expect(tutor).toHaveProperty('data_nascimento');
  });
});