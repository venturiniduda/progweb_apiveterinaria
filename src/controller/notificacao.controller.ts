import Notificacao from "../model/notificacao.model";
import NotificacaoRepository from "../repositories/notificacao.repository";
import { Request, Response } from "express";

async function getNotificacao(req: Request, res: Response) {
    /*  #swagger.tags = ['Notificação']
        #swagger.description = 'Busca uma notificação pelo ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da notificação',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Notificação encontrada.',
            schema: { $ref: "#/definitions/Notificacao" }
        }
        #swagger.responses[404] = {
            description: 'Notificação não encontrada.'
        }
    */
    const id = Number(req.params.id);
    const notificacao = await NotificacaoRepository.getNotificacao(id);

    if (notificacao)
        res.status(200).json(notificacao);
    else
        res.sendStatus(404);
}

async function getNotificacoes(_: Request, res: Response) {
    /*  #swagger.tags = ['Notificação']
        #swagger.description = 'Retorna todas as notificações cadastradas.'
        #swagger.responses[200] = {
            description: 'Lista de notificações.',
            schema: [{ $ref: "#/definitions/Notificacao" }]
        }
    */
    const notificacoes = await NotificacaoRepository.getNotificacoes();
    res.status(200).json(notificacoes);
}

async function addNotificacao(req: Request, res: Response) {
    /*  #swagger.tags = ['Notificação']
        #swagger.description = 'Cadastra uma nova notificação.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Dados da nova notificação.',
            required: true,
            schema: { $ref: "#/definitions/Notificacao" }
        }
        #swagger.responses[201] = {
            description: 'Notificação criada com sucesso.',
            schema: { $ref: "#/definitions/Notificacao" }
        }
    */
    const data = req.body as Notificacao;
    const nova = await NotificacaoRepository.addNotificacao(data);

    res.status(201).json(nova);
}

async function updateNotificacao(req: Request, res: Response) {
    /*  #swagger.tags = ['Notificação']
        #swagger.description = 'Atualiza os dados de uma notificação existente.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da notificação',
            required: true,
            type: 'integer'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Novos dados da notificação.',
            required: true,
            schema: { $ref: "#/definitions/Notificacao" }
        }
        #swagger.responses[200] = {
            description: 'Notificação atualizada com sucesso.',
            schema: { $ref: "#/definitions/Notificacao" }
        }
        #swagger.responses[404] = {
            description: 'Notificação não encontrada.'
        }
    */
    const id = Number(req.params.id);
    const data = req.body as Notificacao;

    const atualizada = await NotificacaoRepository.updateNotificacao(id, data);

    if (atualizada)
        res.status(200).json(atualizada);
    else
        res.sendStatus(404);
}

async function deleteNotificacao(req: Request, res: Response) {
    /*  #swagger.tags = ['Notificação']
        #swagger.description = 'Exclui uma notificação pelo ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da notificação',
            required: true,
            type: 'integer'
        }
        #swagger.responses[204] = {
            description: 'Notificação deletada com sucesso.'
        }
        #swagger.responses[404] = {
            description: 'Notificação não encontrada.'
        }
    */
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
}
