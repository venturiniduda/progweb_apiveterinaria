import express from "express"
import ConsultaController from "../controller/consulta.controller"

const router = express.Router();

/**
 * @openapi
 * /consulta:
 *   get:
 *     summary: Lista todas as consultas
 *     tags: [Consulta]
 *     responses:
 *       200:
 *         description: Lista de consultas
 * 
 *   post:
 *     summary: Cria uma nova consulta
 *     tags: [Consulta]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: consulta criada com sucesso
 */

router.get("/:id", ConsultaController.getConsulta);
router.get("/", ConsultaController.getConsultas);
router.post("/", ConsultaController.addConsulta);
router.patch("/:id", ConsultaController.updateConsulta);
router.delete("/:id", ConsultaController.deleteConsulta);

export default router;