// import receitaController from '../../controller/receita.controller';
// import ReceitaRepository from '../../repositories/receita.repository';
// import { Request, Response } from 'express';

// jest.mock('../../repositories/receita.repository');

// describe('Receita Controller', () => {
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

//   describe('getReceita', () => {
//     it('deve retornar 200 com a receita se encontrada', async () => {
//       const receitaMock = {
//         id: 1,
//         descricao: 'Consulta de rotina',
//         valor: 200.0,
//         data: new Date('2025-07-17')
//       };
//       req = { params: { id: '1' } };

//       (ReceitaRepository.getReceita as jest.Mock).mockResolvedValue(receitaMock);

//       await receitaController.getReceita(req as Request, res as Response);

//       expect(ReceitaRepository.getReceita).toHaveBeenCalledWith(1);
//       expect(statusMock).toHaveBeenCalledWith(200);
//       expect(jsonMock).toHaveBeenCalledWith(receitaMock);
//     });

//     it('deve retornar 404 se a receita não for encontrada', async () => {
//       req = { params: { id: '1' } };
//       (ReceitaRepository.getReceita as jest.Mock).mockResolvedValue(null);

//       await receitaController.getReceita(req as Request, res as Response);

//       expect(res.sendStatus).toHaveBeenCalledWith(404);
//     });
//   });

//   describe('getReceitas', () => {
//     it('deve retornar 200 com a lista de receitas', async () => {
//       const receitasMock = [
//         {
//           id: 1,
//           descricao: 'Vacinação',
//           valor: 150.0,
//           data: new Date('2025-07-15')
//         }
//       ];
//       req = {}; // req é ignorado

//       (ReceitaRepository.getReceitas as jest.Mock).mockResolvedValue(receitasMock);

//       await receitaController.getReceitas(req as Request, res as Response);

//       expect(statusMock).toHaveBeenCalledWith(200);
//       expect(jsonMock).toHaveBeenCalledWith(receitasMock);
//     });
//   });

//   describe('addReceita', () => {
//     it('deve retornar 201 com a receita criada', async () => {
//       const novaReceita = {
//         descricao: 'Exame laboratorial',
//         valor: 300.0
//       };

//       const receitaCriada = {
//         ...novaReceita,
//         id: 2,
//         data: new Date('2025-07-17')
//       };

//       req = { body: novaReceita };

//       (ReceitaRepository.addReceita as jest.Mock).mockResolvedValue(receitaCriada);

//       await receitaController.addReceita(req as Request, res as Response);

//       expect(ReceitaRepository.addReceita).toHaveBeenCalledWith(novaReceita);
//       expect(statusMock).toHaveBeenCalledWith(201);
//       expect(jsonMock).toHaveBeenCalledWith(receitaCriada);
//     });
//   });

//   describe('updateReceita', () => {
//     it('deve retornar 200 com a receita atualizada se encontrada', async () => {
//       const receitaAtualizada = {
//         id: 1,
//         descricao: 'Consulta com medicação',
//         valor: 250.0,
//         data: new Date('2025-07-17')
//       };

//       req = {
//         params: { id: '1' },
//         body: {
//           descricao: receitaAtualizada.descricao,
//           valor: receitaAtualizada.valor
//         }
//       };

//       (ReceitaRepository.updateReceita as jest.Mock).mockResolvedValue(receitaAtualizada);

//       await receitaController.updateReceita(req as Request, res as Response);

//       expect(ReceitaRepository.updateReceita).toHaveBeenCalledWith(1, req.body);
//       expect(statusMock).toHaveBeenCalledWith(200);
//       expect(jsonMock).toHaveBeenCalledWith(receitaAtualizada);
//     });

//     it('deve retornar 404 se a receita não for encontrada', async () => {
//       req = { params: { id: '1' }, body: {} };
//       (ReceitaRepository.updateReceita as jest.Mock).mockResolvedValue(null);

//       await receitaController.updateReceita(req as Request, res as Response);

//       expect(res.sendStatus).toHaveBeenCalledWith(404);
//     });
//   });

//   describe('deleteReceita', () => {
//     it('deve retornar 204 se a receita for deletada', async () => {
//       req = { params: { id: '1' } };
//       (ReceitaRepository.deleteReceita as jest.Mock).mockResolvedValue(true);

//       await receitaController.deleteReceita(req as Request, res as Response);

//       expect(ReceitaRepository.deleteReceita).toHaveBeenCalledWith(1);
//       expect(res.sendStatus).toHaveBeenCalledWith(204);
//     });

//     it('deve retornar 404 se a receita não for encontrada', async () => {
//       req = { params: { id: '1' } };
//       (ReceitaRepository.deleteReceita as jest.Mock).mockResolvedValue(false);

//       await receitaController.deleteReceita(req as Request, res as Response);

//       expect(res.sendStatus).toHaveBeenCalledWith(404);
//     });
//   });
// });