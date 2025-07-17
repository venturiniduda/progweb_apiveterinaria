import express, { Request, Response } from 'express';
import request from 'supertest';
import router from '../routers/veterinario.router';
import VeterinarioController from '../controller/veterinario.controller';

// Mocka todos os métodos do controller
jest.mock('../controller/veterinario.controller', () => ({
  getVeterinario: jest.fn((req: Request, res: Response) => res.status(200).send('get')),
  addVeterinario: jest.fn((req: Request, res: Response) => res.status(201).send('post')),
  updateVeterinario: jest.fn((req: Request, res: Response) => res.status(200).send('patch')),
  deleteVeterinario: jest.fn((req: Request, res: Response) => res.status(204).send()),
}));

const app = express();
app.use(express.json());
app.use('/veterinarios', router);

describe('veterinario.router', () => {
  it('GET /veterinarios/:id chama getVeterinario', async () => {
    const res = await request(app).get('/veterinarios/1');
    expect(res.status).toBe(200);
    expect(VeterinarioController.getVeterinario).toHaveBeenCalled();
  });

  it('GET /veterinarios chama getVeterinario', async () => {
    const res = await request(app).get('/veterinarios');
    expect(res.status).toBe(200);
    expect(VeterinarioController.getVeterinario).toHaveBeenCalled();
  });

  it('POST /veterinarios chama addVeterinario', async () => {
    const res = await request(app)
      .post('/veterinarios')
      .send({ nome: 'Teste' });

    expect(res.status).toBe(201);
    expect(VeterinarioController.addVeterinario).toHaveBeenCalled();
  });

  it('PATCH /veterinarios/:id chama updateVeterinario', async () => {
    const res = await request(app)
      .patch('/veterinarios/1')
      .send({ nome: 'Atualizado' });

    expect(res.status).toBe(200);
    expect(VeterinarioController.updateVeterinario).toHaveBeenCalled();
  });

  it('DELETE /veterinarios/:id chama deleteVeterinario', async () => {
    const res = await request(app).delete('/veterinarios/1');
    expect(res.status).toBe(204);
    expect(VeterinarioController.deleteVeterinario).toHaveBeenCalled();
  });
});