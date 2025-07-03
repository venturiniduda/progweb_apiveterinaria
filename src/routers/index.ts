import express from "express"
import PacienteRouter from "./paciente.router"
import TutorRouter from "./tutor.router"
import AdminRouter from "./admin.router"
import VeterinarioRouter from "./veterinario.router"
import Admin from "../model/admin.model"

const router = express.Router();

router.get("/paciente", PacienteRouter);
router.get("/tutor", TutorRouter);
router.get("/admin", AdminRouter);
router.get("/veterinario", VeterinarioRouter);

export default router;
