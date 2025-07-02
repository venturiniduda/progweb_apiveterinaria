import express from "express"
import PatientRouter from "./paciente.router"

const router = express.Router();

router.get("/patients", PatientRouter);

export default router;
