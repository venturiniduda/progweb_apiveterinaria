// import consultaController from '../../controller/consulta.controller';
// import ConsultaRepository from '../../repositories/consulta.repository';
// import { Request, Response } from 'express';

// jest.mock('../../repositories/consulta.repository');

// describe('Consulta Controller', () => {
//   let req: Partial<Request>;
//   let res: Partial<Response>;
//   let jsonMock: jest.Mock;
//   let statusMock: jest.Mock;

//   beforeEach(() => {
//     jsonMock = jest.fn();
//     statusMock = jest.fn(() => ({ json: jsonMock }));

//     res = {
//       status: statusMock,
//       sendStatus: jest.fn()
//     };
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   describe('getConsulta', () => {
//     it('deve retornar 200 com a consulta se encontrada', async () => {
//       const consultaMock = {
//         consulta_id: 1,
//         tutor_id: 2,
//         paciente_id: 3,
//         vet_id: 4,
//         data_consulta: new Date('2025-07-20'),
//         hora_consulta: '14:30',
//         status: 'agendada',
//         criado_em: new Date(),
//         tutor: null,
//         paciente: null,
//         veterinario: null,
//         prontuarios: []
//       };

//       req = { params: { id: '1' } };
//       (ConsultaRepository.getConsulta as jest.Mock).mockResolvedValue(consultaMock);

//       await consultaController.getConsulta(req as Request, res as Response);

//       expect(ConsultaRepository.getConsulta).toHaveBeenCalledWith(1);
//       expect(statusMock).toHaveBeenCalledWith(200);
//       expect(jsonMock).toHaveBeenCalledWith(consultaMock);
//     });

//     it('deve retornar 404 se a consulta não for encontrada', async () => {
//       req = { params: { id: '1' } };
//       (ConsultaRepository.getConsulta as jest.Mock).mockResolvedValue(null);

//       await consultaController.getConsulta(req as Request, res as Response);

//       expect(res.sendStatus).toHaveBeenCalledWith(404);
//     });
//   });

//   describe('getConsultas', () => {
//     it('deve retornar 200 com a lista de consultas', async () => {
//       const consultasMock = [
//         {
//           consulta_id: 1,
//           tutor_id: 2,
//           paciente_id: 3,
//           vet_id: 4,
//           data_consulta: new Date('2025-07-20'),
//           hora_consulta: '14:30',
//           status: 'agendada',
//           criado_em: new Date(),
//           tutor: null,
//           paciente: null,
//           veterinario: null,
//           prontuarios: []
//         }
//       ];

//       (ConsultaRepository.getConsultas as jest.Mock).mockResolvedValue(consultasMock);

//       await consultaController.getConsultas(req as Request, res as Response);

//       expect(statusMock).toHaveBeenCalledWith(200);
//       expect(jsonMock).toHaveBeenCalledWith(consultasMock);
//     });
//   });

//   describe('addConsulta', () => {
//     it('deve retornar 201 com a consulta criada', async () => {
//       const novo = {
//         tutor_id: 2,
//         paciente_id: 3,
//         vet_id: 4,
//         data_consulta: new Date('2025-08-01'),
//         hora_consulta: '15:00',
//         status: 'agendada'
//       };

//       const criado = {
//         consulta_id: 2,
//         ...novo,
//         criado_em: new Date(),
//         tutor: null,
//         paciente: null,
//         veterinario: null,
//         prontuarios: []
//       };

//       req = { body: novo };
//       (ConsultaRepository.addConsulta as jest.Mock).mockResolvedValue(criado);

//       await consultaController.addConsulta(req as Request, res as Response);

//       expect(ConsultaRepository.addConsulta).toHaveBeenCalledWith(novo);
//       expect(statusMock).toHaveBeenCalledWith(201);
//       expect(jsonMock).toHaveBeenCalledWith(criado);
//     });
//   });

//   describe('updateConsulta', () => {
//     it('deve retornar 200 com a consulta atualizada', async () => {
//       const atualizacao = {
//         tutor_id: 2,
//         paciente_id: 3,
//         vet_id: 4,
//         data_consulta: new Date('2025-08-10'),
//         hora_consulta: '16:00',
//         status: 'realizada'
//       };

//       const atualizado = {
//         consulta_id: 2,
//         ...atualizacao,
//         criado_em: new Date(),
//         tutor: null,
//         paciente: null,
//         veterinario: null,
//         prontuarios: []
//       };

//       req = { params: { id: '2' }, body: atualizacao };
//       (ConsultaRepository.updateConsulta as jest.Mock).mockResolvedValue(atualizado);

//       await consultaController.updateConsulta(req as Request, res as Response);

//       expect(ConsultaRepository.updateConsulta).toHaveBeenCalledWith(2, atualizacao);
//       expect(statusMock).toHaveBeenCalledWith(200);
//       expect(jsonMock).toHaveBeenCalledWith(atualizado);
//     });

//     it('deve retornar 404 se a consulta não for encontrada para atualizar', async () => {
//       req = { params: { id: '2' }, body: {} };
//       (ConsultaRepository.updateConsulta as jest.Mock).mockResolvedValue(null);

//       await consultaController.updateConsulta(req as Request, res as Response);

//       expect(res.sendStatus).toHaveBeenCalledWith(404);
//     });
//   });

//   describe('deleteConsulta', () => {
//     it('deve retornar 204 se a consulta for deletada', async () => {
//       req = { params: { id: '2' } };
//       (ConsultaRepository.deleteConsulta as jest.Mock).mockResolvedValue(true);

//       await consultaController.deleteConsulta(req as Request, res as Response);

//       expect(ConsultaRepository.deleteConsulta).toHaveBeenCalledWith(2);
//       expect(res.sendStatus).toHaveBeenCalledWith(204);
//     });

//     it('deve retornar 404 se a consulta não for encontrada para deletar', async () => {
//       req = { params: { id: '2' } };
//       (ConsultaRepository.deleteConsulta as jest.Mock).mockResolvedValue(false);

//       await consultaController.deleteConsulta(req as Request, res as Response);

//       expect(res.sendStatus).toHaveBeenCalledWith(404);
//     });
//   });
// });