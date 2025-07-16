import express from "express"
import userController from "../controller/user.controller";

const router = express.Router();

/**
 * @openapi
 * /user:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Lista de usuários
 * 
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */

router.post("/", userController.addUser);

export default router;