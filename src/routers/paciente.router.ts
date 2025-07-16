import express from "express"
import PacienteController from "../controller/paciente.controller"

const router = express.Router();

/**
 * @openapi
 * /paciente:
 *   get:
 *     summary: Lista todos os pacientes
 *     tags: [Paciente]
 *     responses:
 *       200:
 *         description: Lista de pacientes
 * 
 *   post:
 *     summary: Cria um novo paciente
 *     tags: [Paciente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Paciente criado com sucesso
 */

router.get("/:id", PacienteController.getPaciente);
router.get("/", PacienteController.getPacientes);
router.post("/", PacienteController.addPaciente);
router.patch("/:id", PacienteController.updatePaciente);
router.delete("/:id", PacienteController.deletePaciente);

export default router;