import express from "express";
import ReceitaController from "../controller/receita.controller";

const router = express.Router();

router.get("/:id", ReceitaController.getReceita);
router.get("/", ReceitaController.getReceitas);
router.post("/", ReceitaController.addReceita);
router.patch("/:id", ReceitaController.updateReceita);
router.delete("/:id", ReceitaController.deleteReceita);

export default router;
