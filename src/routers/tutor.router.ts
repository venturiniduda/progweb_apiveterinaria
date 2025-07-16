import express from "express"
import TutorController from "../controller/tutor.controller"

const router = express.Router();

/**
 * @openapi
 * /tutor:
 *   get:
 *     summary: Lista todos os tutores
 *     tags: [Tutor]
 *     responses:
 *       200:
 *         description: Lista de tutores
 * 
 *   post:
 *     summary: Cria um novo tutor
 *     tags: [Tutor]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Tutor criado com sucesso
 */

router.get("/:id", TutorController.getTutor);
router.get("/", TutorController.getTutores);
router.post("/", TutorController.addTutor);
router.patch("/:id", TutorController.updateTutor);
router.delete("/:id", TutorController.deleteTutor);

export default router;