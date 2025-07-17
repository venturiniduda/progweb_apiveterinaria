import userController from '../../controller/user.controller';
import userRepository from '../../repositories/user.repository';
import { Request, Response, NextFunction } from 'express';

// Mock do repositório
jest.mock('../../repositories/user.repository');

describe('user.controller', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;
  const mockJson = jest.fn();
  const mockStatus = jest.fn().mockReturnThis();

  beforeEach(() => {
    req = {
      body: {
        username: 'teste',
        password: '123456',
      },
    };

    res = {
      status: mockStatus,
      json: mockJson,
    };

    next = jest.fn();

    jest.clearAllMocks();
  });

  it('addUser deve criar e retornar um usuário com status 201', async () => {
    const mockUser = { id: 1, username: 'teste' };

    (userRepository.addUser as jest.Mock).mockResolvedValue(mockUser);

    await userController.addUser(req as Request, res as Response);

    expect(userRepository.addUser).toHaveBeenCalledWith('teste', '123456');
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockUser);
  });
});