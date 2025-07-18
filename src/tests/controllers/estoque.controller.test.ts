import estoqueController from '../../controller/estoque.controller';
import EstoqueRepository from '../../repositories/estoque.repository';
import { Request, Response } from 'express';

jest.mock('../../repositories/estoque.repository');

describe('Estoque Controller', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn(() => ({ json: jsonMock }));

    res = {
      status: statusMock,
      sendStatus: jest.fn()
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getEstoque', () => {
    it('deve retornar 200 com o estoque se encontrado', async () => {
      const estoqueMock = {
        estoque_id: 1,
        med_id: 10,
        lote: 123,
        validade: new Date('2026-12-31'),
        quantidade_atual: 50,
        quantidade_minima: 10,
        localizacao: 'Prateleira A1',
        criado_em: new Date(),
        medicamento: null,
      };

      req = { params: { id: '1' } };
      (EstoqueRepository.getEstoque as jest.Mock).mockResolvedValue(estoqueMock);

      await estoqueController.getEstoque(req as Request, res as Response);

      expect(EstoqueRepository.getEstoque).toHaveBeenCalledWith(1);
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(estoqueMock);
    });

    it('deve retornar 404 se estoque não for encontrado', async () => {
      req = { params: { id: '1' } };
      (EstoqueRepository.getEstoque as jest.Mock).mockResolvedValue(null);

      await estoqueController.getEstoque(req as Request, res as Response);

      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });

  describe('getEstoques', () => {
    it('deve retornar 200 com a lista de estoques', async () => {
      const estoquesMock = [
        {
          estoque_id: 1,
          med_id: 10,
          lote: 123,
          validade: new Date('2026-12-31'),
          quantidade_atual: 50,
          quantidade_minima: 10,
          localizacao: 'Prateleira A1',
          criado_em: new Date(),
          medicamento: null,
        }
      ];

      (EstoqueRepository.getEstoques as jest.Mock).mockResolvedValue(estoquesMock);

      await estoqueController.getEstoques(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(estoquesMock);
    });
  });

  describe('addEstoque', () => {
    it('deve retornar 201 com o estoque criado', async () => {
      const novo = {
        med_id: 15,
        lote: 456,
        validade: new Date('2027-01-01'),
        quantidade_atual: 100,
        quantidade_minima: 20,
        localizacao: 'Prateleira B2',
      };

      const criado = {
        estoque_id: 2,
        ...novo,
        criado_em: new Date(),
        medicamento: null,
      };

      req = { body: novo };
      (EstoqueRepository.addEstoque as jest.Mock).mockResolvedValue(criado);

      await estoqueController.addEstoque(req as Request, res as Response);

      expect(EstoqueRepository.addEstoque).toHaveBeenCalledWith(novo);
      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith(criado);
    });
  });

  describe('updateEstoque', () => {
    it('deve retornar 200 com o estoque atualizado', async () => {
      const atualizacao = {
        med_id: 15,
        lote: 789,
        validade: new Date('2027-06-01'),
        quantidade_atual: 70,
        quantidade_minima: 15,
        localizacao: 'Prateleira C3',
      };

      const atualizado = {
        estoque_id: 2,
        ...atualizacao,
        criado_em: new Date(),
        medicamento: null,
      };

      req = { params: { id: '2' }, body: atualizacao };
      (EstoqueRepository.updateEstoque as jest.Mock).mockResolvedValue(atualizado);

      await estoqueController.updateEstoque(req as Request, res as Response);

      expect(EstoqueRepository.updateEstoque).toHaveBeenCalledWith(2, atualizacao);
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(atualizado);
    });

    it('deve retornar 404 se o estoque não for encontrado para atualizar', async () => {
      req = { params: { id: '2' }, body: {} };
      (EstoqueRepository.updateEstoque as jest.Mock).mockResolvedValue(null);

      await estoqueController.updateEstoque(req as Request, res as Response);

      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });

  describe('deleteEstoque', () => {
    it('deve retornar 204 se o estoque for deletado', async () => {
      req = { params: { id: '2' } };
      (EstoqueRepository.deleteEstoque as jest.Mock).mockResolvedValue(true);

      await estoqueController.deleteEstoque(req as Request, res as Response);

      expect(EstoqueRepository.deleteEstoque).toHaveBeenCalledWith(2);
      expect(res.sendStatus).toHaveBeenCalledWith(204);
    });

    it('deve retornar 404 se o estoque não for encontrado para deletar', async () => {
      req = { params: { id: '2' } };
      (EstoqueRepository.deleteEstoque as jest.Mock).mockResolvedValue(false);

      await estoqueController.deleteEstoque(req as Request, res as Response);

      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });
});