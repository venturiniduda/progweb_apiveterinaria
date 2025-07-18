import pacienteController from '../../controller/paciente.controller';
import PacienteRepository from '../../repositories/paciente.repository';
import { Request, Response } from 'express';

jest.mock('../../repositories/paciente.repository');

describe('Paciente Controller', () => {
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

  describe('getPaciente', () => {
    it('deve retornar 200 com o paciente se encontrado', async () => {
      const pacienteMock = {
        animal_id: 1,
        tutor_id: 2,
        nome: 'Rex',
        sexo: 'M',
        raca: 'Labrador',
        cor_pelagem: 'Preta',
        data_nascimento: new Date('2020-06-01'),
        criado_em: new Date()
      };

      req = { params: { id: '1' } };
      (PacienteRepository.getPaciente as jest.Mock).mockResolvedValue(pacienteMock);

      await pacienteController.getPaciente(req as Request, res as Response);

      expect(PacienteRepository.getPaciente).toHaveBeenCalledWith(1);
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(pacienteMock);
    });

    it('deve retornar 404 se o paciente não for encontrado', async () => {
      req = { params: { id: '1' } };
      (PacienteRepository.getPaciente as jest.Mock).mockResolvedValue(null);

      await pacienteController.getPaciente(req as Request, res as Response);

      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });

  describe('getPacientes', () => {
    it('deve retornar 200 com a lista de pacientes', async () => {
      const pacientesMock = [
        {
          animal_id: 1,
          tutor_id: 2,
          nome: 'Mika',
          sexo: 'F',
          raca: 'Poodle',
          cor_pelagem: 'Branca',
          data_nascimento: new Date('2018-01-10'),
          criado_em: new Date()
        }
      ];

      (PacienteRepository.getPacientes as jest.Mock).mockResolvedValue(pacientesMock);

      await pacienteController.getPacientes(res as Response);

      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(pacientesMock);
    });
  });

  describe('addPaciente', () => {
    it('deve retornar 201 com o paciente criado', async () => {
      const novoPaciente = {
        tutor_id: 2,
        nome: 'Tobi',
        sexo: 'M',
        raca: 'Beagle',
        cor_pelagem: 'Marrom',
        data_nascimento: new Date('2021-03-10')
      };

      const pacienteCriado = {
        animal_id: 5,
        ...novoPaciente,
        criado_em: new Date()
      };

      req = { body: novoPaciente };
      (PacienteRepository.addPaciente as jest.Mock).mockResolvedValue(pacienteCriado);

      await pacienteController.addPaciente(req as Request, res as Response);

      expect(PacienteRepository.addPaciente).toHaveBeenCalledWith(novoPaciente);
      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith(pacienteCriado);
    });
  });

  describe('updatePaciente', () => {
    it('deve retornar 200 com o paciente atualizado', async () => {
      const dadosAtualizados = {
        nome: 'Tobi Atualizado',
        sexo: 'M',
        raca: 'Beagle',
        cor_pelagem: 'Caramelo',
        data_nascimento: new Date('2021-03-10')
      };

      const pacienteAtualizado = {
        animal_id: 5,
        tutor_id: 2,
        ...dadosAtualizados,
        criado_em: new Date()
      };

      req = {
        params: { id: '5' },
        body: dadosAtualizados
      };

      (PacienteRepository.updatePaciente as jest.Mock).mockResolvedValue(pacienteAtualizado);

      await pacienteController.updatePaciente(req as Request, res as Response);

      expect(PacienteRepository.updatePaciente).toHaveBeenCalledWith(5, dadosAtualizados);
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(pacienteAtualizado);
    });

    it('deve retornar 404 se o paciente não for encontrado', async () => {
      req = { params: { id: '5' }, body: {} };
      (PacienteRepository.updatePaciente as jest.Mock).mockResolvedValue(null);

      await pacienteController.updatePaciente(req as Request, res as Response);

      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });

  describe('deletePaciente', () => {
    it('deve retornar 204 se o paciente for deletado', async () => {
      req = { params: { id: '5' } };
      (PacienteRepository.deletePaciente as jest.Mock).mockResolvedValue(true);

      await pacienteController.deletePaciente(req as Request, res as Response);

      expect(PacienteRepository.deletePaciente).toHaveBeenCalledWith(5);
      expect(res.sendStatus).toHaveBeenCalledWith(204);
    });

    it('deve retornar 404 se o paciente não for encontrado', async () => {
      req = { params: { id: '5' } };
      (PacienteRepository.deletePaciente as jest.Mock).mockResolvedValue(false);

      await pacienteController.deletePaciente(req as Request, res as Response);

      expect(res.sendStatus).toHaveBeenCalledWith(404);
    });
  });
});