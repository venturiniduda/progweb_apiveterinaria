import medicamentoController from '../../controller/medicamento.controller';
import MedicamentoRepository from '../../repositories/medicamento.repository';
import { Request, Response } from 'express';

jest.mock('../../repositories/medicamento.repository');

describe('Medicamento Controller', () => {
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

  describe('getMedicamento', () => {
    it('deve retornar 200 com o medicamento se encontrado', async () => {
      const medicamentoMock = {
        med_id: 1,
        nome: 'Amoxicilina',
        principio_ativo: 'Amoxicilina',
        codigo_registro: 'BR12345',
        categoria: 'Antibiótico',
        posologia: '8h',
        via_administracao: 'Oral',
        fabricante: 'VetPharma',
        codigo_barras: '7891234567890',
        preco_unitario: 25.5,
        prescricao_obrigatoria: 'S',
        criado_em: new Date(),
        estoque: null
      };

      req = { params: { id: '1' } };
      (MedicamentoRepository.getMedicamento as jest.Mock).mockResolvedValue(medicamentoMock);

      await medicamentoController.getMedicamento(req as Request, res as Response);

      expect(MedicamentoRepository.getMedicamento).toHaveBeenCalledWith(1);
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(medicamentoMock);
    });

    it('deve retornar 404 se não encontrado', async () => {
      req = { params: { id: '1' } };
      (MedicamentoRepository.getMedicamento as jest.Mock).mockResolvedValue(null);

      await medicamentoController.getMedicamento(req as Request, res as Response);

      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });

  describe('getMedicamentos', () => {
    it('deve retornar 200 com a lista de medicamentos', async () => {
      const medicamentosMock = [
        {
          med_id: 1,
          nome: 'Dipirona',
          principio_ativo: 'Metamizol',
          codigo_registro: 'ANVISA0001',
          categoria: 'Analgésico',
          posologia: '12h',
          via_administracao: 'Oral',
          fabricante: 'AnimalMed',
          codigo_barras: '1234567890123',
          preco_unitario: 10,
          prescricao_obrigatoria: 'N',
          criado_em: new Date(),
          estoque: null
        }
      ];

      (MedicamentoRepository.getMedicamentos as jest.Mock).mockResolvedValue(medicamentosMock);

      await medicamentoController.getMedicamentos(res as Response);

      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(medicamentosMock);
    });
  });

  describe('addMedicamento', () => {
    it('deve retornar 201 com o medicamento criado', async () => {
      const novo = {
        nome: 'Ivermectina',
        principio_ativo: 'Ivermectina',
        codigo_registro: 'IVM0002',
        categoria: 'Antiparasitário',
        posologia: '1x/dia',
        via_administracao: 'Oral',
        fabricante: 'VetTech',
        codigo_barras: '9876543210987',
        preco_unitario: 30,
        prescricao_obrigatoria: 'S'
      };

      const criado = {
        med_id: 5,
        ...novo,
        criado_em: new Date(),
        estoque: null
      };

      req = { body: novo };
      (MedicamentoRepository.addMedicamento as jest.Mock).mockResolvedValue(criado);

      await medicamentoController.addMedicamento(req as Request, res as Response);

      expect(MedicamentoRepository.addMedicamento).toHaveBeenCalledWith(novo);
      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith(criado);
    });
  });

  describe('updateMedicamento', () => {
    it('deve retornar 200 com o medicamento atualizado', async () => {
      const atualizacao = {
        nome: 'Ivermectina Atualizada',
        principio_ativo: 'Ivermectina',
        codigo_registro: 'IVM0002',
        categoria: 'Antiparasitário',
        posologia: '2x/dia',
        via_administracao: 'Oral',
        fabricante: 'VetTech',
        codigo_barras: '9876543210987',
        preco_unitario: 32,
        prescricao_obrigatoria: 'S'
      };

      const atualizado = {
        med_id: 5,
        ...atualizacao,
        criado_em: new Date(),
        estoque: null
      };

      req = { params: { id: '5' }, body: atualizacao };
      (MedicamentoRepository.updateMedicamento as jest.Mock).mockResolvedValue(atualizado);

      await medicamentoController.updateMedicamento(req as Request, res as Response);

      expect(MedicamentoRepository.updateMedicamento).toHaveBeenCalledWith(5, atualizacao);
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(atualizado);
    });

    it('deve retornar 404 se o medicamento não for encontrado', async () => {
      req = { params: { id: '5' }, body: {} };
      (MedicamentoRepository.updateMedicamento as jest.Mock).mockResolvedValue(null);

      await medicamentoController.updateMedicamento(req as Request, res as Response);

      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });

  describe('deleteMedicamento', () => {
    it('deve retornar 204 se o medicamento for deletado', async () => {
      req = { params: { id: '5' } };
      (MedicamentoRepository.deleteMedicamento as jest.Mock).mockResolvedValue(true);

      await medicamentoController.deleteMedicamento(req as Request, res as Response);

      expect(MedicamentoRepository.deleteMedicamento).toHaveBeenCalledWith(5);
      expect(res.sendStatus).toHaveBeenCalledWith(204);
    });

    it('deve retornar 404 se o medicamento não for encontrado', async () => {
      req = { params: { id: '5' } };
      (MedicamentoRepository.deleteMedicamento as jest.Mock).mockResolvedValue(false);

      await medicamentoController.deleteMedicamento(req as Request, res as Response);

      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });
});