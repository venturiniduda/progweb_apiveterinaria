import express from "express"
import VeterinarioController from "../controller/veterinario.controller"

const router = express.Router();

/**
 * @openapi
 * /veterinario:
 *   get:
 *     summary: Lista todos os veterinários
 *     tags: [Veterinario]
 *     responses:
 *       200:
 *         description: Lista de veterinários
 * 
 *   post:
 *     summary: Cria um novo veterinário
 *     tags: [Veterinario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Veterinário criado com sucesso
 */

router.get("/:id", VeterinarioController.getVeterinario);
router.get("/", VeterinarioController.getVeterinario);
router.post("/", VeterinarioController.addVeterinario);
router.patch("/:id", VeterinarioController.updateVeterinario);
router.delete("/:id", VeterinarioController.deleteVeterinario);

export default router;