import express from "express"
import PacienteRouter from "./paciente.router"
import TutorRouter from "./tutor.router"
import AdminRouter from "./admin.router"
import VeterinarioRouter from "./veterinario.router"
import MedicamentoRouter from "./medicamento.router"
import EstoqueRouter from "./estoque.router"
import UserRouter from "./user.router"
import ConsultaRouter from "./consulta.router"
import ProntuarioRouter from "./prontuario.router"
import CobrancaRouter from "./cobranca.router"
import NotificacaoRouter from "./notificacao.router"
import ReceitaRouter from "./receita.router"
import { jwtAuthMiddleware } from "../middlewares/auth.middleware";
import loginController from "../controller/login.controller";

const router = express.Router();

// essa é mais usada no dia a dia no mercado de trabalho:
router.post('/login', loginController.login);
router.get("/paciente", jwtAuthMiddleware, PacienteRouter);
router.get("/tutor", jwtAuthMiddleware, TutorRouter);
router.get("/admin", jwtAuthMiddleware, AdminRouter);
router.get("/veterinario", jwtAuthMiddleware, VeterinarioRouter);
router.get("/medicamento", jwtAuthMiddleware, MedicamentoRouter);
router.get("/estoque", jwtAuthMiddleware, EstoqueRouter);
router.get("/users", UserRouter);
router.get("/consulta", ConsultaRouter);
router.get("/prontuario", ProntuarioRouter);
router.get("/cobranca", CobrancaRouter);
router.get("/notificacao", NotificacaoRouter);
router.get("/receita", ReceitaRouter);

export default router;