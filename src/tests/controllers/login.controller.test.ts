import login from "../../controller/login.controller";
import { AppDataSource } from "../../data-source";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

jest.mock("../../data-source");
jest.mock("bcrypt");
jest.mock("jsonwebtoken");

describe("login controller", () => {
  const mockUser = {
    id: 1,
    username: "user1",
    password: "hashedPassword",
  };

  let req: any;
  let res: any;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn(() => ({ json: jsonMock, sendStatus: jest.fn() }));

    req = {
      body: {
        username: "user1",
        password: "password123",
      },
      params: {},
    };

    res = {
      status: statusMock,
      json: jsonMock,
      sendStatus: jest.fn(),
    };

    // Mock do repositório
    (AppDataSource.getRepository as jest.Mock).mockReturnValue({
      findOne: jest.fn().mockResolvedValue(mockUser),
    });

    (compare as jest.Mock).mockResolvedValue(true);
    (jwt.sign as jest.Mock).mockReturnValue("fakeToken");

    process.env.JWT_KEY = "mysecretkey";
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve retornar token com usuário e senha válidos", async () => {
    await login.login(req, res);

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Login realizado com sucesso!",
      token: "fakeToken",
    });
  });

  it("deve retornar 400 se username ou senha faltando", async () => {
    req.body = {};

    await login.login(req, res);

    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Usuário e/ou senha obrigatórios!",
    });
  });

  it("deve retornar 401 se usuário não existir", async () => {
    (AppDataSource.getRepository as jest.Mock).mockReturnValue({
      findOne: jest.fn().mockResolvedValue(null),
    });

    await login.login(req, res);

    expect(statusMock).toHaveBeenCalledWith(401);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Usuário e/ou senha inválidos.",
    });
  });

  it("deve retornar 401 se senha inválida", async () => {
    (compare as jest.Mock).mockResolvedValue(false);

    await login.login(req, res);

    expect(statusMock).toHaveBeenCalledWith(401);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Usuário e/ou senha inválidos.",
    });
  });

  it("deve retornar 500 se JWT_KEY não estiver configurada", async () => {
    delete process.env.JWT_KEY;

    await login.login(req, res);

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Erro no servidor. Tente novamente mais tarde.",
    });
  });
});