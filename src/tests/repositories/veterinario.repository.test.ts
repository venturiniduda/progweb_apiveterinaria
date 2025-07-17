import Veterinario from '../../model/veterinario.model';

// Mock repository and service setup
const mockRepository = {
  find: jest.fn(),
  findOneBy: jest.fn(),
  save: jest.fn(),
  delete: jest.fn(),
};

const veterinarioService = {
  getVeterinarios: async () => mockRepository.find(),
  updateVeterinario: async (id: number, data: Veterinario) => {
    const vet = await mockRepository.findOneBy({ vet_id: id });
    if (!vet) return null;
    return mockRepository.save({ ...vet, ...data });
  },
  deleteVeterinario: async (id: number) => {
    const result = await mockRepository.delete({ vet_id: id });
    return result.affected > 0;
  },
};

  it('getVeterinarios deve retornar uma lista de veterinários', async () => {
    const veterinarios = [
      { vet_id: 1, nome: 'Ana' },
      { vet_id: 2, nome: 'João' },
    ] as Veterinario[];

    mockRepository.find.mockResolvedValue(veterinarios);

    const result = await veterinarioService.getVeterinarios();
    expect(result).toEqual(veterinarios);
    expect(mockRepository.find).toHaveBeenCalled();
  });

  it('updateVeterinario deve atualizar um veterinário existente', async () => {
    const id = 1;
    const existingVet = {
      vet_id: id,
      nome: 'Antigo',
      sobrenome: 'Nome',
      crmv: '123',
      telefone: '999',
      email: 'antigo@email.com',
      criado_em: new Date(),
    } as Veterinario;

    const updateData = {
      nome: 'Novo',
      sobrenome: 'Atualizado',
      crmv: '999',
      telefone: '1111',
      email: 'novo@email.com',
      criado_em: new Date(),
    } as Veterinario;

    mockRepository.findOneBy.mockResolvedValue(existingVet);
    mockRepository.save.mockResolvedValue({ ...existingVet, ...updateData });

    const result = await veterinarioService.updateVeterinario(id, updateData);

    expect(result).not.toBeNull();
    expect(result?.nome).toBe('Novo');
    expect(mockRepository.save).toHaveBeenCalledWith(expect.objectContaining(updateData));
  });

  it('updateVeterinario deve retornar null se veterinário não existir', async () => {
    mockRepository.findOneBy.mockResolvedValue(null);

    const result = await veterinarioService.updateVeterinario(999, {} as Veterinario);
    expect(result).toBeNull();
  });

  it('deleteVeterinario deve retornar true quando exclusão for bem-sucedida', async () => {
    mockRepository.delete.mockResolvedValue({ affected: 1 });

    const result = await veterinarioService.deleteVeterinario(1);
    expect(result).toBe(true);
    expect(mockRepository.delete).toHaveBeenCalledWith({ vet_id: 1 });
  });

  it('deleteVeterinario deve retornar false quando nenhum registro for afetado', async () => {
    mockRepository.delete.mockResolvedValue({ affected: 0 });

    const result = await veterinarioService.deleteVeterinario(999);
    expect(result).toBe(false);
  });