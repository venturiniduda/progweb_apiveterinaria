import express from "express"
import PacienteRouter from "./paciente.router"
import TutorRouter from "./tutor.router"
import AdminRouter from "./admin.router"
import VeterinarioRouter from "./veterinario.router"
import MedicamentoRouter from "./medicamento.router"
import EstoqueRouter from "./estoque.router"

const router = express.Router();

router.get("/paciente", PacienteRouter);
router.get("/tutor", TutorRouter);
router.get("/admin", AdminRouter);
router.get("/veterinario", VeterinarioRouter);
router.get("/medicamento", MedicamentoRouter);
router.get("/estoque", EstoqueRouter);

export default router;