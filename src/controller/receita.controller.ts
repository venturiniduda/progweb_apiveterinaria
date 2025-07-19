import Receita from "../model/receita.model";
import ReceitaRepository from "../repositories/receita.repository";
import { Request, Response } from "express";

async function getReceita(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Receitas']
        #swagger.description = 'Busca uma receita pelo ID.'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da receita',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Receita encontrada.',
            schema: { $ref: "#/definitions/Receita" }
        }
        #swagger.responses[404] = {
            description: 'Receita não encontrada.'
        }
    */
    const id = Number(req.params.id);
    const receita = await ReceitaRepository.getReceita(id);

    if (receita)
        res.status(200).json(receita);
    else
        res.sendStatus(404);
}

async function getReceitas(_: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Receitas']
        #swagger.description = 'Retorna todas as receitas cadastradas.'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.responses[200] = {
            description: 'Lista de receitas.',
            schema: [{ $ref: "#/definitions/Receita" }]
        }
    */
    const receitas = await ReceitaRepository.getReceitas();
    res.status(200).json(receitas);
}

async function addReceita(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Receitas']
        #swagger.description = 'Cadastra uma nova receita.'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Dados da nova receita.',
            required: true,
            schema: { $ref: "#/definitions/Receita" }
        }
        #swagger.responses[201] = {
            description: 'Receita criada com sucesso.',
            schema: { $ref: "#/definitions/Receita" }
        }
    */
    const data = req.body as Receita;
    const receita = await ReceitaRepository.addReceita(data);

    res.status(201).json(receita);
}

async function updateReceita(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Receitas']
        #swagger.description = 'Atualiza os dados de uma receita existente.'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da receita',
            required: true,
            type: 'integer'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Novos dados da receita.',
            required: true,
            schema: { $ref: "#/definitions/Receita" }
        }
        #swagger.responses[200] = {
            description: 'Receita atualizada com sucesso.',
            schema: { $ref: "#/definitions/Receita" }
        }
        #swagger.responses[404] = {
            description: 'Receita não encontrada.'
        }
    */
    const id = Number(req.params.id);
    const data = req.body as Receita;

    const receita = await ReceitaRepository.updateReceita(id, data);

    if (receita)
        res.status(200).json(receita);
    else
        res.sendStatus(404);
}

async function deleteReceita(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Receitas']
        #swagger.description = 'Exclui uma receita pelo ID.'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da receita',
            required: true,
            type: 'integer'
        }
        #swagger.responses[204] = {
            description: 'Receita deletada com sucesso.'
        }
        #swagger.responses[404] = {
            description: 'Receita não encontrada.'
        }
    */
    const id = Number(req.params.id);

    if (await ReceitaRepository.deleteReceita(id))
        res.sendStatus(204);
    else
        res.sendStatus(404);
}

export default {
    getReceita,
    getReceitas,
    addReceita,
    updateReceita,
    deleteReceita,
}
