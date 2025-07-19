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

router.post('/login', loginController.login);

router.use("/paciente", jwtAuthMiddleware, PacienteRouter);
router.use("/tutor", jwtAuthMiddleware, TutorRouter);
router.use("/admin", jwtAuthMiddleware, AdminRouter);
router.use("/veterinario", jwtAuthMiddleware, VeterinarioRouter);
router.use("/medicamento", jwtAuthMiddleware, MedicamentoRouter);
router.use("/estoque", jwtAuthMiddleware, EstoqueRouter);
router.post("/users", UserRouter);
router.use("/consulta", ConsultaRouter);
router.use("/prontuario", ProntuarioRouter);
router.use("/cobranca", CobrancaRouter);
router.use("/notificacao", NotificacaoRouter);
router.use("/receita", ReceitaRouter);

export default router;