import express from "express";
import NotificacaoController from "../controller/notificacao.controller";

const router = express.Router();

router.get("/:id", NotificacaoController.getNotificacao);
router.get("/", NotificacaoController.getNotificacoes);
router.post("/", NotificacaoController.addNotificacao);
router.patch("/:id", NotificacaoController.updateNotificacao);
router.delete("/:id", NotificacaoController.deleteNotificacao);

export default router;
