import Notificacao from "../model/notificacao.model";
import NotificacaoRepository from "../repositories/notificacao.repository";
import { Request, Response } from "express";

async function getNotificacao(req: Request, res: Response) {
    const id = Number(req.params.id);
    const notificacao = await NotificacaoRepository.getNotificacao(id);

    if (notificacao)
        res.status(200).json(notificacao);
    else
        res.sendStatus(404);
}

async function getNotificacoes(_: Request, res: Response) {
    const notificacoes = await NotificacaoRepository.getNotificacoes();
    res.status(200).json(notificacoes);
}

async function addNotificacao(req: Request, res: Response) {
    const data = req.body as Notificacao;
    const nova = await NotificacaoRepository.addNotificacao(data);

    res.status(201).json(nova);
}

async function updateNotificacao(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = req.body as Notificacao;

    const atualizada = await NotificacaoRepository.updateNotificacao(id, data);

    if (atualizada)
        res.status(200).json(atualizada);
    else
        res.sendStatus(404);
}

async function deleteNotificacao(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (await NotificacaoRepository.deleteNotificacao(id))
        res.sendStatus(204);
    else
        res.sendStatus(404);
}

export default {
    getNotificacao,
    getNotificacoes,
    addNotificacao,
    updateNotificacao,
    deleteNotificacao,
};
