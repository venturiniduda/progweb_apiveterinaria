import express from "express"
import ProntuarioController from "../controller/prontuario.controller"

const router = express.Router();

/**
 * @openapi
 * /prontuario:
 *   get:
 *     summary: Lista todos os prontuários
 *     tags: [Prontuario]
 *     responses:
 *       200:
 *         description: Lista de prontuários
 * 
 *   post:
 *     summary: Cria um novo prontuário
 *     tags: [Prontuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Prontuário criado com sucesso
 */

router.get("/:id", ProntuarioController.getProntuario);
router.get("/", ProntuarioController.getProntuarios);
router.post("/", ProntuarioController.addProntuario);
router.patch("/:id", ProntuarioController.updateProntuario);
router.delete("/:id", ProntuarioController.deleteProntuario);

export default router;