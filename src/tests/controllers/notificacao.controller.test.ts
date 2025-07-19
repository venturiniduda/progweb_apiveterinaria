// import notificacaoController from '../../controller/notificacao.controller';
// import NotificacaoRepository from '../../repositories/notificacao.repository';
// import { Request, Response } from 'express';

// jest.mock('../../repositories/notificacao.repository');

// describe('Notificacao Controller', () => {
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

//   describe('getNotificacao', () => {
//     it('deve retornar 200 com a notificação encontrada', async () => {
//       const notificacaoMock = {
//         id: 1,
//         mensagem: 'Vacina marcada para amanhã',
//         tipo: 'Alerta',
//         dataEnvio: new Date()
//       };

//       req = { params: { id: '1' } };
//       (NotificacaoRepository.getNotificacao as jest.Mock).mockResolvedValue(notificacaoMock);

//       await notificacaoController.getNotificacao(req as Request, res as Response);

//       expect(NotificacaoRepository.getNotificacao).toHaveBeenCalledWith(1);
//       expect(statusMock).toHaveBeenCalledWith(200);
//       expect(jsonMock).toHaveBeenCalledWith(notificacaoMock);
//     });

//     it('deve retornar 404 se a notificação não for encontrada', async () => {
//       req = { params: { id: '1' } };
//       (NotificacaoRepository.getNotificacao as jest.Mock).mockResolvedValue(null);

//       await notificacaoController.getNotificacao(req as Request, res as Response);

//       expect(res.sendStatus).toHaveBeenCalledWith(404);
//     });
//   });

//   describe('getNotificacoes', () => {
//     it('deve retornar 200 com todas as notificações', async () => {
//       const notificacoesMock = [
//         {
//           id: 1,
//           mensagem: 'Consulta confirmada',
//           tipo: 'Info',
//           dataEnvio: new Date()
//         }
//       ];

//       (NotificacaoRepository.getNotificacoes as jest.Mock).mockResolvedValue(notificacoesMock);

//       await notificacaoController.getNotificacoes({} as Request, res as Response);

//       expect(statusMock).toHaveBeenCalledWith(200);
//       expect(jsonMock).toHaveBeenCalledWith(notificacoesMock);
//     });
//   });

//   describe('addNotificacao', () => {
//     it('deve retornar 201 com a nova notificação', async () => {
//       const novaNotificacao = {
//         mensagem: 'Consulta agendada para hoje',
//         tipo: 'Lembrete'
//       };

//       const criada = {
//         id: 2,
//         ...novaNotificacao,
//         dataEnvio: new Date()
//       };

//       req = { body: novaNotificacao };
//       (NotificacaoRepository.addNotificacao as jest.Mock).mockResolvedValue(criada);

//       await notificacaoController.addNotificacao(req as Request, res as Response);

//       expect(NotificacaoRepository.addNotificacao).toHaveBeenCalledWith(novaNotificacao);
//       expect(statusMock).toHaveBeenCalledWith(201);
//       expect(jsonMock).toHaveBeenCalledWith(criada);
//     });
//   });

//   describe('updateNotificacao', () => {
//     it('deve retornar 200 com a notificação atualizada', async () => {
//       const atualizacao = {
//         mensagem: 'Lembrete atualizado',
//         tipo: 'Alerta'
//       };

//       const atualizada = {
//         id: 3,
//         ...atualizacao,
//         dataEnvio: new Date()
//       };

//       req = { params: { id: '3' }, body: atualizacao };
//       (NotificacaoRepository.updateNotificacao as jest.Mock).mockResolvedValue(atualizada);

//       await notificacaoController.updateNotificacao(req as Request, res as Response);

//       expect(NotificacaoRepository.updateNotificacao).toHaveBeenCalledWith(3, atualizacao);
//       expect(statusMock).toHaveBeenCalledWith(200);
//       expect(jsonMock).toHaveBeenCalledWith(atualizada);
//     });

//     it('deve retornar 404 se a notificação não for encontrada', async () => {
//       req = { params: { id: '3' }, body: {} };
//       (NotificacaoRepository.updateNotificacao as jest.Mock).mockResolvedValue(null);

//       await notificacaoController.updateNotificacao(req as Request, res as Response);

//       expect(res.sendStatus).toHaveBeenCalledWith(404);
//     });
//   });

//   describe('deleteNotificacao', () => {
//     it('deve retornar 204 se a notificação for deletada', async () => {
//       req = { params: { id: '4' } };
//       (NotificacaoRepository.deleteNotificacao as jest.Mock).mockResolvedValue(true);

//       await notificacaoController.deleteNotificacao(req as Request, res as Response);

//       expect(NotificacaoRepository.deleteNotificacao).toHaveBeenCalledWith(4);
//       expect(res.sendStatus).toHaveBeenCalledWith(204);
//     });

//     it('deve retornar 404 se a notificação não for encontrada', async () => {
//       req = { params: { id: '4' } };
//       (NotificacaoRepository.deleteNotificacao as jest.Mock).mockResolvedValue(false);

//       await notificacaoController.deleteNotificacao(req as Request, res as Response);

//       expect(res.sendStatus).toHaveBeenCalledWith(404);
//     });
//   });
// });