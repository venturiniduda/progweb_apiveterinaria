import express from "express"
import PacienteRouter from "./routers/paciente.router"

const router = express.Router();

router.get("/patients", PacienteRouter);

export default router;
