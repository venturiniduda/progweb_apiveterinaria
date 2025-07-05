import express from "express"
import EstoqueController from "../controller/estoque.controller"

const router = express.Router();

router.get("/:id", EstoqueController.getEstoque);
router.get("/", EstoqueController.getEstoques);
router.post("/", EstoqueController.addEstoque);
router.patch("/:id", EstoqueController.updateEstoque);
router.delete("/:id", EstoqueController.deleteEstoque);

export default router;