import express from "express"
import PacienteRouter from "./paciente.router"

const router = express.Router();

router.get("/patients", PacienteRouter);

export default router;
