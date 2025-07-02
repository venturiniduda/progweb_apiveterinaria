import express from "express"
import PacienteController from "../controllers/paciente.controller"

const router = express.Router();

router.get("/:id", PacienteController.getPaciente);
router.get("/", PacienteController.getPacientes);
router.post("/", PacienteController.addPaciente);
router.patch("/:id", PacienteController.updatePaciente);
router.delete("/:id", PacienteController.deletePaciente);

export default router;