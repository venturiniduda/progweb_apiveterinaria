import tutorController from '../../controller/tutor.controller';
import TutorRepository from '../../repositories/tutor.repository';
import { Request, Response } from 'express';

jest.mock('../../repositories/tutor.repository');

describe('Tutor Controller', () => {
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

  describe('getTutor', () => {
    it('deve retornar 200 com os dados do tutor se encontrado', async () => {
      const tutorMock = { id: 1, nome: 'João' };
      req = { params: { id: '1' } };

      (TutorRepository.getTutor as jest.Mock).mockResolvedValue(tutorMock);

      await tutorController.getTutor(req as Request, res as Response);

      expect(TutorRepository.getTutor).toHaveBeenCalledWith(1);
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(tutorMock);
    });

    it('deve retornar 404 se o tutor não for encontrado', async () => {
      req = { params: { id: '1' } };
      (TutorRepository.getTutor as jest.Mock).mockResolvedValue(null);

      await tutorController.getTutor(req as Request, res as Response);

      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });

  describe('getTutores', () => {
    it('deve retornar 200 com a lista de tutores', async () => {
      const tutoresMock = [{ id: 1, nome: 'João' }];
      (TutorRepository.getTutores as jest.Mock).mockResolvedValue(tutoresMock);

      await tutorController.getTutores(res as Response);

      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(tutoresMock);
    });
  });

  describe('addTutor', () => {
    it('deve retornar 201 com o tutor criado', async () => {
      const tutorMock = { nome: 'Maria' };
      req = { body: tutorMock };

      (TutorRepository.addTutor as jest.Mock).mockResolvedValue(tutorMock);

      await tutorController.addTutor(req as Request, res as Response);

      expect(TutorRepository.addTutor).toHaveBeenCalledWith(tutorMock);
      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith(tutorMock);
    });
  });

  describe('updateTutor', () => {
    it('deve retornar 200 com o tutor atualizado se encontrado', async () => {
      const updatedTutor = { id: 1, nome: 'Carlos' };
      req = { params: { id: '1' }, body: updatedTutor };

      (TutorRepository.updateTutor as jest.Mock).mockResolvedValue(updatedTutor);

      await tutorController.updateTutor(req as Request, res as Response);

      expect(TutorRepository.updateTutor).toHaveBeenCalledWith(1, updatedTutor);
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(updatedTutor);
    });

    it('deve retornar 404 se o tutor não for encontrado', async () => {
      req = { params: { id: '1' }, body: {} };
      (TutorRepository.updateTutor as jest.Mock).mockResolvedValue(null);

      await tutorController.updateTutor(req as Request, res as Response);

      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });

  describe('deleteTutor', () => {
    it('deve retornar 204 se o tutor for deletado', async () => {
      req = { params: { id: '1' } };
      (TutorRepository.deleteTutor as jest.Mock).mockResolvedValue(true);

      await tutorController.deleteTutor(req as Request, res as Response);

      expect(TutorRepository.deleteTutor).toHaveBeenCalledWith(1);
      expect(res.sendStatus).toHaveBeenCalledWith(204);
    });

    it('deve retornar 404 se o tutor não for encontrado', async () => {
      req = { params: { id: '1' } };
      (TutorRepository.deleteTutor as jest.Mock).mockResolvedValue(false);

      await tutorController.deleteTutor(req as Request, res as Response);

      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });
});