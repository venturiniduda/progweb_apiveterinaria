import express from "express"
import PacienteRouter from "./paciente.router"
import TutorRouter from "./tutor.router"
import AdminRouter from "./admin.router"
import VeterinarioRouter from "./veterinario.router"
import MedicamentoRouter from "./medicamento.router"
import EstoqueRouter from "./estoque.router"
import UserRouter from "./user.router"
import { apiKeyAuthMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/paciente", apiKeyAuthMiddleware, PacienteRouter);
router.get("/tutor", apiKeyAuthMiddleware, TutorRouter);
router.get("/admin", apiKeyAuthMiddleware, AdminRouter);
router.get("/veterinario", apiKeyAuthMiddleware, VeterinarioRouter);
router.get("/medicamento", apiKeyAuthMiddleware, MedicamentoRouter);
router.get("/estoque", apiKeyAuthMiddleware, EstoqueRouter);
router.get("/users", UserRouter);

export default router;