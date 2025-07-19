// import adminController from '../../controller/admin.controller';
// import AdminRepository from '../../repositories/admin.repository';
// import { Request, Response } from 'express';

// jest.mock('../../repositories/admin.repository');

// describe('Admin Controller', () => {
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

//   describe('getAdmin', () => {
//     it('deve retornar 200 com o admin encontrado', async () => {
//       const adminMock = {
//         admin_id: 1,
//         nome: 'João',
//         sobrenome: 'Silva',
//         cpf: '12345678901',
//         cnpj: '12345678901234',
//         rua: 'Rua A',
//         numero: 100,
//         bairro: 'Centro',
//         cidade: 'Cidade X',
//         complemento: 'Apto 10',
//         email: 'joao@email.com',
//         telefone: '12345678901',
//         cargo: 'Gerente',
//         data_admissao: new Date('2023-01-01'),
//         senha_hash: 'hash123',
//         criado_em: new Date(),
//       };

//       req = { params: { id: '1' } };
//       (AdminRepository.getAdmin as jest.Mock).mockResolvedValue(adminMock);

//       await adminController.getAdmin(req as Request, res as Response);

//       expect(AdminRepository.getAdmin).toHaveBeenCalledWith(1);
//       expect(statusMock).toHaveBeenCalledWith(200);
//       expect(jsonMock).toHaveBeenCalledWith(adminMock);
//     });

//     it('deve retornar 404 se admin não encontrado', async () => {
//       req = { params: { id: '1' } };
//       (AdminRepository.getAdmin as jest.Mock).mockResolvedValue(null);

//       await adminController.getAdmin(req as Request, res as Response);

//       expect(res.sendStatus).toHaveBeenCalledWith(404);
//     });
//   });

//   describe('getAdmins', () => {
//     it('deve retornar 200 com a lista de admins', async () => {
//       const adminsMock = [
//         {
//           admin_id: 1,
//           nome: 'João',
//           sobrenome: 'Silva',
//           cpf: '12345678901',
//           cnpj: '12345678901234',
//           rua: 'Rua A',
//           numero: 100,
//           bairro: 'Centro',
//           cidade: 'Cidade X',
//           complemento: 'Apto 10',
//           email: 'joao@email.com',
//           telefone: '12345678901',
//           cargo: 'Gerente',
//           data_admissao: new Date('2023-01-01'),
//           senha_hash: 'hash123',
//           criado_em: new Date(),
//         },
//       ];

//       (AdminRepository.getAdmins as jest.Mock).mockResolvedValue(adminsMock);

//       await adminController.getAdmins(req as Request, res as Response);

//       expect(statusMock).toHaveBeenCalledWith(200);
//       expect(jsonMock).toHaveBeenCalledWith(adminsMock);
//     });
//   });

//   describe('addAdmin', () => {
//     it('deve retornar 201 com o admin criado', async () => {
//       const novoAdmin = {
//         nome: 'Maria',
//         sobrenome: 'Oliveira',
//         cpf: '10987654321',
//         cnpj: '43210987654321',
//         rua: 'Rua B',
//         numero: 200,
//         bairro: 'Jardim',
//         cidade: 'Cidade Y',
//         complemento: 'Casa',
//         email: 'maria@email.com',
//         telefone: '10987654321',
//         cargo: 'Assistente',
//         data_admissao: new Date('2023-02-01'),
//         senha_hash: 'hash456',
//       };

//       const adminCriado = {
//         admin_id: 2,
//         ...novoAdmin,
//         criado_em: new Date(),
//       };

//       req = { body: novoAdmin };
//       (AdminRepository.addAdmin as jest.Mock).mockResolvedValue(adminCriado);

//       await adminController.addAdmin(req as Request, res as Response);

//       expect(AdminRepository.addAdmin).toHaveBeenCalledWith(novoAdmin);
//       expect(statusMock).toHaveBeenCalledWith(201);
//       expect(jsonMock).toHaveBeenCalledWith(adminCriado);
//     });
//   });

//   describe('updateAdmin', () => {
//     it('deve retornar 200 com o admin atualizado', async () => {
//       const atualizacao = {
//         nome: 'Maria Atualizada',
//         sobrenome: 'Oliveira',
//         cpf: '10987654321',
//         cnpj: '43210987654321',
//         rua: 'Rua B',
//         numero: 200,
//         bairro: 'Jardim',
//         cidade: 'Cidade Y',
//         complemento: 'Casa',
//         email: 'maria@email.com',
//         telefone: '10987654321',
//         cargo: 'Assistente',
//         data_admissao: new Date('2023-02-01'),
//         senha_hash: 'hash456',
//       };

//       const adminAtualizado = {
//         admin_id: 2,
//         ...atualizacao,
//         criado_em: new Date(),
//       };

//       req = { params: { id: '2' }, body: atualizacao };
//       (AdminRepository.updateAdmin as jest.Mock).mockResolvedValue(adminAtualizado);

//       await adminController.updateAdmin(req as Request, res as Response);

//       expect(AdminRepository.updateAdmin).toHaveBeenCalledWith(2, atualizacao);
//       expect(statusMock).toHaveBeenCalledWith(200);
//       expect(jsonMock).toHaveBeenCalledWith(adminAtualizado);
//     });

//     it('deve retornar 404 se o admin não for encontrado para atualizar', async () => {
//       req = { params: { id: '2' }, body: {} };
//       (AdminRepository.updateAdmin as jest.Mock).mockResolvedValue(null);

//       await adminController.updateAdmin(req as Request, res as Response);

//       expect(res.sendStatus).toHaveBeenCalledWith(404);
//     });
//   });

//   describe('deleteAdmin', () => {
//     it('deve retornar 204 se o admin for deletado', async () => {
//       req = { params: { id: '2' } };
//       (AdminRepository.deleteAdmin as jest.Mock).mockResolvedValue(true);

//       await adminController.deleteAdmin(req as Request, res as Response);

//       expect(AdminRepository.deleteAdmin).toHaveBeenCalledWith(2);
//       expect(res.sendStatus).toHaveBeenCalledWith(204);
//     });

//     it('deve retornar 404 se o admin não for encontrado para deletar', async () => {
//       req = { params: { id: '2' } };
//       (AdminRepository.deleteAdmin as jest.Mock).mockResolvedValue(false);

//       await adminController.deleteAdmin(req as Request, res as Response);

//       expect(res.sendStatus).toHaveBeenCalledWith(404);
//     });
//   });
// });