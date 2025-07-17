import controller from '../../controller/veterinario.controller';
import Veterinario from '../../model/veterinario.model';
import VeterinarioRepository from '../../repositories/veterinario.repository';
import { Request, Response } from 'express';

// Cria mocks para os métodos do repositório
jest.mock('../../repositories/veterinario.repository');

describe('Veterinario Controller', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock, send: jest.fn() });

    req = {};
    res = {
      status: statusMock,
      json: jsonMock,
      sendStatus: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getVeterinario', () => {
    it('getVeterinario deve retornar um veterinário com status 200', async () => {
  const mockVeterinario = { vet_id: 1, nome: 'Dr. Vet' } as Veterinario;
  jest.spyOn(VeterinarioRepository, 'getVeterinario').mockResolvedValue(mockVeterinario);

  const jsonMock = jest.fn();
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jsonMock,
  } as unknown as Response;

  await controller.getVeterinario(
    { params: { id: '1' } } as unknown as Request,
    res as Response
  );

  expect(VeterinarioRepository.getVeterinario).toHaveBeenCalledWith(1);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(jsonMock).toHaveBeenCalledWith(mockVeterinario);
});

    it('deve retornar 404 se o veterinário não existir', async () => {
      req.params = { id: '2' };

      (VeterinarioRepository.getVeterinario as jest.Mock).mockResolvedValue(null);

      jest.spyOn(VeterinarioRepository, 'getVeterinario').mockResolvedValue(null);

const res = {
  sendStatus: jest.fn(),
} as unknown as Response;

await controller.getVeterinario(
  { params: { id: '999' } } as unknown as Request,
  res
);

expect(res.sendStatus).toHaveBeenCalledWith(404);

    });
  });

  describe('getVeterinarios', () => {
    it('deve retornar a lista de veterinários com status 200', async () => {
      const mockLista = [{ id: 1, nome: 'Dr. Vet' }];
      (VeterinarioRepository.getVeterinarios as jest.Mock).mockResolvedValue(mockLista);

      await controller.getVeterinarios({} as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(mockLista);
    });
  });

  describe('addVeterinario', () => {
    it('deve adicionar um veterinário e retornar 201', async () => {
      const mockData = { nome: 'Novo Vet' };
      req.body = mockData;

      const mockResponse = { id: 10, ...mockData };
      (VeterinarioRepository.addVeterinario as jest.Mock).mockResolvedValue(mockResponse);

      await controller.addVeterinario(req as Request, res as Response);

      expect(VeterinarioRepository.addVeterinario).toHaveBeenCalledWith(mockData);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith(mockResponse);
    });
  });

  describe('updateVeterinario', () => {
    it('deve atualizar um veterinário e retornar 200', async () => {
      req.params = { id: '1' };
      req.body = { nome: 'Atualizado' };
      const mockResult = { id: 1, nome: 'Atualizado' };

      (VeterinarioRepository.updateVeterinario as jest.Mock).mockResolvedValue(mockResult);

      await controller.updateVeterinario(req as Request, res as Response);

      expect(VeterinarioRepository.updateVeterinario).toHaveBeenCalledWith(1, req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(mockResult);
    });

    it('deve retornar 404 se o veterinário não existir', async () => {
      req.params = { id: '99' };
      req.body = { nome: 'Não Existe' };

      (VeterinarioRepository.updateVeterinario as jest.Mock).mockResolvedValue(null);

      await controller.updateVeterinario(req as Request, res as Response);

      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });

  describe('deleteVeterinario', () => {
    it('deve deletar e retornar 204', async () => {
      req.params = { id: '1' };
      (VeterinarioRepository.deleteVeterinario as jest.Mock).mockResolvedValue(true);

      await controller.deleteVeterinario(req as Request, res as Response);

      expect(VeterinarioRepository.deleteVeterinario).toHaveBeenCalledWith(1);
      expect(res.sendStatus).toHaveBeenCalledWith(204);
    });

    it('deve retornar 404 se não encontrar o veterinário', async () => {
      req.params = { id: '99' };
      (VeterinarioRepository.deleteVeterinario as jest.Mock).mockResolvedValue(false);

      await controller.deleteVeterinario(req as Request, res as Response);

      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });
});