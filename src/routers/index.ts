import express from "express"
import PacienteRouter from "./paciente.router"
import TutorRouter from "./tutor.router"
import AdminRouter from "./admin.router"

const router = express.Router();

router.get("/paciente", PacienteRouter);
router.get("/tutor", TutorRouter);
router.get("/admin", AdminRouter);

export default router;
