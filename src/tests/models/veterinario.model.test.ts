import { DataSource } from 'typeorm';
import Veterinario from '../../model/veterinario.model';
import { Consulta } from '../../model/consulta.model'; 
import Tutor from '../../model/tutor.model';
import Paciente from '../../model/paciente.model';
import Prontuario from '../../model/prontuario.model';

let testDataSource: DataSource;

beforeAll(async () => {
  testDataSource = new DataSource({
    type: 'sqlite',
    database: ':memory:',
    synchronize: true,
    entities: [Veterinario, Consulta, Tutor, Paciente, Prontuario],
  });

  await testDataSource.initialize();
});

afterAll(async () => {
  await testDataSource.destroy();
});

describe('Veterinario Entity', () => {
  it('deve salvar um veterinário com sucesso', async () => {
    const repo = testDataSource.getRepository(Veterinario);

    const vet = repo.create({
      nome: 'João',
      sobrenome: 'Silva',
      crmv: '12345678901234',
      telefone: '11999999999',
      email: 'joao@vet.com',
    });

    const saved = await repo.save(vet);

    expect(saved.vet_id).toBeDefined();
    expect(saved.nome).toBe('João');
    expect(saved.criado_em).toBeInstanceOf(Date);
  });

  it('deve lançar erro se campo obrigatório estiver faltando', async () => {
    const repo = testDataSource.getRepository(Veterinario);

    const vet = repo.create({
      // nome ausente
      sobrenome: 'Silva',
      crmv: '12345678901234',
      telefone: '11999999999',
      email: 'joao@vet.com',
    });

    await expect(repo.save(vet)).rejects.toThrow();
  });
});