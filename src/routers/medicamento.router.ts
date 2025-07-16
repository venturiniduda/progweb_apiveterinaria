import express from "express"
import MedicamentoController from "../controller/medicamento.controller"

const router = express.Router();

/**
 * @openapi
 * /medicamento:
 *   get:
 *     summary: Lista todos os medicamentos
 *     tags: [Medicamento]
 *     responses:
 *       200:
 *         description: Lista de medicamentos
 * 
 *   post:
 *     summary: Cria um novo medicamento
 *     tags: [Medicamento]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Medicamento criado com sucesso
 */

router.get("/:id", MedicamentoController.getMedicamento);
router.get("/", MedicamentoController.getMedicamentos);
router.post("/", MedicamentoController.addMedicamento);
router.patch("/:id", MedicamentoController.updateMedicamento);
router.delete("/:id", MedicamentoController.deleteMedicamento);

export default router;