import express from "express"
import MedicamentoController from "../controller/medicamento.controller"

const router = express.Router();

router.get("/:id", MedicamentoController.getMedicamento);
router.get("/", MedicamentoController.getMedicamentos);
router.post("/", MedicamentoController.addMedicamento);
router.patch("/:id", MedicamentoController.updateMedicamento);
router.delete("/:id", MedicamentoController.deleteMedicamento);

export default router;