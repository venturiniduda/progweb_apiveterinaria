import express from "express"
import PacienteRouter from "./paciente.router"

const router = express.Router();

router.get("/paciente", PacienteRouter);

export default router;
