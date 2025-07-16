import express from "express"
import AdminController from "../controller/admin.controller"

const router = express.Router();

/**
 * @openapi
 * /admin:
 *   get:
 *     summary: Lista todos os administradores
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: Lista de administradores
 * 
 *   post:
 *     summary: Cria um novo administrador
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Administrador criado com sucesso
 */

router.get("/:id", AdminController.getAdmin);
router.get("/", AdminController.getAdmins);
router.post("/", AdminController.addAdmin);
router.patch("/:id", AdminController.updateAdmin);
router.delete("/:id", AdminController.deleteAdmin);

export default router;