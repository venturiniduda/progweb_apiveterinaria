import express from "express";
import CobrancaController from "../controller/cobranca.controller";

const router = express.Router();

router.get("/:id", CobrancaController.getCobranca);
router.get("/", CobrancaController.getCobrancas);
router.post("/", CobrancaController.addCobranca);
router.patch("/:id", CobrancaController.updateCobranca);
router.delete("/:id", CobrancaController.deleteCobranca);

export default router;
