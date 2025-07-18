import prontuarioController from '../../controller/prontuario.controller';
import ProntuarioRepository from '../../repositories/prontuario.repository';
import { Request, Response } from 'express';

jest.mock('../../repositories/prontuario.repository');

describe('Prontuario Controller', () => {
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

  describe('getProntuario', () => {
    it('deve retornar 200 com o prontuário se encontrado', async () => {
      const prontuarioMock = {
        prontuario_id: 1,
        consulta_id: 10,
        tipo_atendimento: 'Rotina',
        queixa_principal: 'Perda de apetite',
        historico_medico: 'Nenhum',
        sistema_afetado: 'Digestivo',
        detalhes_clinicos: 'Exame clínico sem alterações',
        criado_em: new Date()
      };

      req = { params: { id: '1' } };
      (ProntuarioRepository.getProntuario as jest.Mock).mockResolvedValue(prontuarioMock);

      await prontuarioController.getProntuario(req as Request, res as Response);

      expect(ProntuarioRepository.getProntuario).toHaveBeenCalledWith(1);
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(prontuarioMock);
    });

    it('deve retornar 404 se o prontuário não for encontrado', async () => {
      req = { params: { id: '1' } };
      (ProntuarioRepository.getProntuario as jest.Mock).mockResolvedValue(null);

      await prontuarioController.getProntuario(req as Request, res as Response);

      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });

  describe('getProntuarios', () => {
    it('deve retornar 200 com todos os prontuários', async () => {
      const prontuariosMock = [
        {
          prontuario_id: 1,
          consulta_id: 10,
          tipo_atendimento: 'Emergência',
          queixa_principal: 'Febre alta',
          historico_medico: 'Otite recente',
          sistema_afetado: 'Neurológico',
          detalhes_clinicos: 'Animal letárgico',
          criado_em: new Date()
        }
      ];

      (ProntuarioRepository.getProntuarios as jest.Mock).mockResolvedValue(prontuariosMock);

      await prontuarioController.getProntuarios(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(prontuariosMock);
    });
  });

  describe('addProntuario', () => {
    it('deve retornar 201 com o prontuário criado', async () => {
      const novoProntuario = {
        consulta_id: 12,
        tipo_atendimento: 'Rotina',
        queixa_principal: 'Coceira',
        historico_medico: 'Alergia anterior',
        sistema_afetado: 'Dermatológico',
        detalhes_clinicos: 'Presença de lesões',
      };

      const prontuarioCriado = {
        prontuario_id: 2,
        ...novoProntuario,
        criado_em: new Date()
      };

      req = { body: novoProntuario };
      (ProntuarioRepository.addProntuario as jest.Mock).mockResolvedValue(prontuarioCriado);

      await prontuarioController.addProntuario(req as Request, res as Response);

      expect(ProntuarioRepository.addProntuario).toHaveBeenCalledWith(novoProntuario);
      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith(prontuarioCriado);
    });
  });

  describe('updateProntuario', () => {
    it('deve retornar 200 com o prontuário atualizado', async () => {
      const dadosAtualizados = {
        tipo_atendimento: 'Urgência',
        queixa_principal: 'Vômito',
        historico_medico: 'Cirurgia prévia',
        sistema_afetado: 'Gastrointestinal',
        detalhes_clinicos: 'Animal vomitou 3 vezes'
      };

      const retornoAtualizado = {
        prontuario_id: 1,
        consulta_id: 15,
        ...dadosAtualizados,
        criado_em: new Date()
      };

      req = {
        params: { id: '1' },
        body: dadosAtualizados
      };

      (ProntuarioRepository.updateProntuario as jest.Mock).mockResolvedValue(retornoAtualizado);

      await prontuarioController.updateProntuario(req as Request, res as Response);

      expect(ProntuarioRepository.updateProntuario).toHaveBeenCalledWith(1, dadosAtualizados);
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(retornoAtualizado);
    });

    it('deve retornar 404 se o prontuário não for encontrado', async () => {
      req = { params: { id: '1' }, body: {} };
      (ProntuarioRepository.updateProntuario as jest.Mock).mockResolvedValue(null);

      await prontuarioController.updateProntuario(req as Request, res as Response);

      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });

  describe('deleteProntuario', () => {
    it('deve retornar 204 se o prontuário for deletado', async () => {
      req = { params: { id: '1' } };
      (ProntuarioRepository.deleteProntuario as jest.Mock).mockResolvedValue(true);

      await prontuarioController.deleteProntuario(req as Request, res as Response);

      expect(ProntuarioRepository.deleteProntuario).toHaveBeenCalledWith(1);
      expect(res.sendStatus).toHaveBeenCalledWith(204);
    });

    it('deve retornar 404 se o prontuário não existir', async () => {
      req = { params: { id: '1' } };
      (ProntuarioRepository.deleteProntuario as jest.Mock).mockResolvedValue(false);

      await prontuarioController.deleteProntuario(req as Request, res as Response);

      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });
});
