import express from "express"
import PacienteRouter from "./paciente.router"
import TutorRouter from "./tutor.router"
import AdminRouter from "./admin.router"
import VeterinarioRouter from "./veterinario.router"
import MedicamentoRouter from "./medicamento.router"
import EstoqueRouter from "./estoque.router"
import UserRouter from "./user.router"
import { apiKeyAuthMiddleware, jwtAuthMiddleware } from "../middlewares/auth.middleware";
import loginController from "../controller/login.controller";

const router = express.Router();

// router.post('/login', loginController.login);
// router.get("/paciente", jwtAuthMiddleware, apiKeyAuthMiddleware, PacienteRouter);
// router.get("/tutor", jwtAuthMiddleware, apiKeyAuthMiddleware, TutorRouter);
// router.get("/admin", jwtAuthMiddleware, apiKeyAuthMiddleware, AdminRouter);
// router.get("/veterinario", jwtAuthMiddleware, apiKeyAuthMiddleware, VeterinarioRouter);
// router.get("/medicamento", jwtAuthMiddleware, apiKeyAuthMiddleware, MedicamentoRouter);
// router.get("/estoque", jwtAuthMiddleware, apiKeyAuthMiddleware, EstoqueRouter);
// router.get("/users", UserRouter);

router.post('/login', loginController.login);
router.get("/paciente", jwtAuthMiddleware, PacienteRouter);
router.get("/tutor", jwtAuthMiddleware, TutorRouter);
router.get("/admin", jwtAuthMiddleware, AdminRouter);
router.get("/veterinario", jwtAuthMiddleware, VeterinarioRouter);
router.get("/medicamento", jwtAuthMiddleware, MedicamentoRouter);
router.get("/estoque", jwtAuthMiddleware, EstoqueRouter);
router.get("/users", UserRouter);

export default router;