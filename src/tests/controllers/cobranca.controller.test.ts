// import cobrancaController from '../../controller/cobranca.controller';
// import CobrancaRepository from '../../repositories/cobranca.repository';
// import { Request, Response } from 'express';

// jest.mock('../../repositories/cobranca.repository');

// describe('Cobranca Controller', () => {
//   let req: Partial<Request>;
//   let res: Partial<Response>;
//   let jsonMock: jest.Mock;
//   let statusMock: jest.Mock;

//   beforeEach(() => {
//     jsonMock = jest.fn();
//     statusMock = jest.fn(() => ({ json: jsonMock }));

//     res = {
//       status: statusMock,
//       sendStatus: jest.fn(),
//     };
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   describe('getCobranca', () => {
//     it('deve retornar 200 com a cobranca se encontrada', async () => {
//       const cobrancaMock = {
//         id: 1,
//         cliente: 'Cliente A',
//         valor: 150.50,
//         status: 'pendente',
//         dataCriacao: new Date(),
//       };

//       req = { params: { id: '1' } };
//       (CobrancaRepository.getCobranca as jest.Mock).mockResolvedValue(cobrancaMock);

//       await cobrancaController.getCobranca(req as Request, res as Response);

//       expect(CobrancaRepository.getCobranca).toHaveBeenCalledWith(1);
//       expect(statusMock).toHaveBeenCalledWith(200);
//       expect(jsonMock).toHaveBeenCalledWith(cobrancaMock);
//     });

//     it('deve retornar 404 se a cobranca não for encontrada', async () => {
//       req = { params: { id: '1' } };
//       (CobrancaRepository.getCobranca as jest.Mock).mockResolvedValue(null);

//       await cobrancaController.getCobranca(req as Request, res as Response);

//       expect(res.sendStatus).toHaveBeenCalledWith(404);
//     });
//   });

//   describe('getCobrancas', () => {
//     it('deve retornar 200 com a lista de cobrancas', async () => {
//       const cobrancasMock = [
//         {
//           id: 1,
//           cliente: 'Cliente A',
//           valor: 150.50,
//           status: 'pendente',
//           dataCriacao: new Date(),
//         },
//       ];

//       (CobrancaRepository.getCobrancas as jest.Mock).mockResolvedValue(cobrancasMock);

//       await cobrancaController.getCobrancas({} as Request, res as Response);

//       expect(statusMock).toHaveBeenCalledWith(200);
//       expect(jsonMock).toHaveBeenCalledWith(cobrancasMock);
//     });
//   });

//   describe('addCobranca', () => {
//     it('deve retornar 201 com a cobranca criada', async () => {
//       const novaCobranca = {
//         cliente: 'Cliente B',
//         valor: 200.00,
//         status: 'pendente',
//       };

//       const cobrancaCriada = {
//         id: 2,
//         ...novaCobranca,
//         dataCriacao: new Date(),
//       };

//       req = { body: novaCobranca };
//       (CobrancaRepository.addCobranca as jest.Mock).mockResolvedValue(cobrancaCriada);

//       await cobrancaController.addCobranca(req as Request, res as Response);

//       expect(CobrancaRepository.addCobranca).toHaveBeenCalledWith(novaCobranca);
//       expect(statusMock).toHaveBeenCalledWith(201);
//       expect(jsonMock).toHaveBeenCalledWith(cobrancaCriada);
//     });
//   });

//   describe('updateCobranca', () => {
//     it('deve retornar 200 com a cobranca atualizada', async () => {
//       const atualizacao = {
//         cliente: 'Cliente Atualizado',
//         valor: 250.00,
//         status: 'pago',
//       };

//       const cobrancaAtualizada = {
//         id: 2,
//         ...atualizacao,
//         dataCriacao: new Date(),
//       };

//       req = { params: { id: '2' }, body: atualizacao };
//       (CobrancaRepository.updateCobranca as jest.Mock).mockResolvedValue(cobrancaAtualizada);

//       await cobrancaController.updateCobranca(req as Request, res as Response);

//       expect(CobrancaRepository.updateCobranca).toHaveBeenCalledWith(2, atualizacao);
//       expect(statusMock).toHaveBeenCalledWith(200);
//       expect(jsonMock).toHaveBeenCalledWith(cobrancaAtualizada);
//     });

//     it('deve retornar 404 se a cobranca não for encontrada para atualizar', async () => {
//       req = { params: { id: '2' }, body: {} };
//       (CobrancaRepository.updateCobranca as jest.Mock).mockResolvedValue(null);

//       await cobrancaController.updateCobranca(req as Request, res as Response);

//       expect(res.sendStatus).toHaveBeenCalledWith(404);
//     });
//   });

//   describe('deleteCobranca', () => {
//     it('deve retornar 204 se a cobranca for deletada', async () => {
//       req = { params: { id: '2' } };
//       (CobrancaRepository.deleteCobranca as jest.Mock).mockResolvedValue(true);

//       await cobrancaController.deleteCobranca(req as Request, res as Response);

//       expect(CobrancaRepository.deleteCobranca).toHaveBeenCalledWith(2);
//       expect(res.sendStatus).toHaveBeenCalledWith(204);
//     });

//     it('deve retornar 404 se a cobranca não for encontrada para deletar', async () => {
//       req = { params: { id: '2' } };
//       (CobrancaRepository.deleteCobranca as jest.Mock).mockResolvedValue(false);

//       await cobrancaController.deleteCobranca(req as Request, res as Response);

//       expect(res.sendStatus).toHaveBeenCalledWith(404);
//     });
//   });
// });