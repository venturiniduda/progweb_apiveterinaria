import express from "express"
import EstoqueController from "../controller/estoque.controller"

const router = express.Router();

/**
 * @openapi
 * /estoque:
 *   get:
 *     summary: Lista todos os estoques
 *     tags: [Estoque]
 *     responses:
 *       200:
 *         description: Lista de estoques
 * 
 *   post:
 *     summary: Cria um novo estoque
 *     tags: [Estoque]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Estoque criado com sucesso
 */

router.get("/:id", EstoqueController.getEstoque);
router.get("/", EstoqueController.getEstoques);
router.post("/", EstoqueController.addEstoque);
router.patch("/:id", EstoqueController.updateEstoque);
router.delete("/:id", EstoqueController.deleteEstoque);

export default router;