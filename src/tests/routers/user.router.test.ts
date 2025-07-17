// src/tests/routes/user.router.test.ts
import request from "supertest";
import express from "express";
import userRouter from "../../routers/user.router";

// mock do controller se quiser isolar a rota
jest.mock("../../controller/user.controller", () => ({
  addUser: (req: express.Request, res: express.Response) => {
    res.status(201).json({ message: "Usuário criado com sucesso!" });
  },
}));

describe("user.router", () => {
  const app = express();
  app.use(express.json());
  app.use("/users", userRouter); // monta a rota

  it("POST /users - deve retornar 201 ao criar um usuário", async () => {
    const res = await request(app)
      .post("/users")
      .send({ username: "teste", password: "123456" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ message: "Usuário criado com sucesso!" });
  });
});