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
import loginRouter from './login.router';

const router = express.Router();

router.use('/login', loginRouter);
router.use("/users", UserRouter);
router.use("/paciente", jwtAuthMiddleware, PacienteRouter);
router.use("/tutor", jwtAuthMiddleware, TutorRouter);
router.use("/admin", jwtAuthMiddleware, AdminRouter);
router.use("/veterinario", jwtAuthMiddleware, VeterinarioRouter);
router.use("/medicamento", jwtAuthMiddleware, MedicamentoRouter);
router.use("/estoque", jwtAuthMiddleware, EstoqueRouter);
router.use("/consulta", jwtAuthMiddleware, ConsultaRouter);
router.use("/prontuario", jwtAuthMiddleware, ProntuarioRouter);
router.use("/cobranca", jwtAuthMiddleware, CobrancaRouter);
router.use("/notificacao", jwtAuthMiddleware, NotificacaoRouter);
router.use("/receita", jwtAuthMiddleware, ReceitaRouter);

export default router;