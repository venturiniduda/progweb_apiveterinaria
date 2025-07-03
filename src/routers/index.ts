import express from "express"
import PacienteRouter from "./paciente.router"
import TutorRouter from "./tutor.router"

const router = express.Router();

router.get("/paciente", PacienteRouter);
router.get("/tutor", TutorRouter);

export default router;
