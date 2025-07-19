import Cobranca from "../model/cobranca.model";
import CobrancaRepository from "../repositories/cobranca.repository";
import { Request, Response } from "express";

async function getCobranca(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Cobrança']
        #swagger.description = 'Busca uma cobrança pelo ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da cobrança',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Cobrança encontrada.',
            schema: { $ref: "#/definitions/Cobranca" }
        }
        #swagger.responses[404] = {
            description: 'Cobrança não encontrada.'
        }
    */
    const id = Number(req.params.id);
    const cobranca = await CobrancaRepository.getCobranca(id);

    if (cobranca)
        res.status(200).json(cobranca);
    else
        res.sendStatus(404);
}

async function getCobrancas(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Cobrança']
        #swagger.description = 'Retorna todas as cobranças cadastradas.'
        #swagger.responses[200] = {
            description: 'Lista de cobranças.',
            schema: [{ $ref: "#/definitions/Cobranca" }]
        }
    */
    const cobrancas = await CobrancaRepository.getCobrancas();
    res.status(200).json(cobrancas);
}

async function addCobranca(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Cobrança']
        #swagger.description = 'Cadastra uma nova cobrança.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Dados da cobrança a ser criada.',
            required: true,
            schema: { $ref: "#/definitions/Cobranca" }
        }
        #swagger.responses[201] = {
            description: 'Cobrança criada com sucesso.',
            schema: { $ref: "#/definitions/Cobranca" }
        }
    */
    const data = req.body as Cobranca;
    const cobranca = await CobrancaRepository.addCobranca(data);
    res.status(201).json(cobranca);
}

async function updateCobranca(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Cobrança']
        #swagger.description = 'Atualiza os dados de uma cobrança existente.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da cobrança',
            required: true,
            type: 'integer'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Novos dados da cobrança.',
            required: true,
            schema: { $ref: "#/definitions/Cobranca" }
        }
        #swagger.responses[200] = {
            description: 'Cobrança atualizada com sucesso.',
            schema: { $ref: "#/definitions/Cobranca" }
        }
        #swagger.responses[404] = {
            description: 'Cobrança não encontrada.'
        }
    */
    const id = Number(req.params.id);
    const data = req.body as Cobranca;
    const cobranca = await CobrancaRepository.updateCobranca(id, data);

    if (cobranca)
        res.status(200).json(cobranca);
    else
        res.sendStatus(404);
}

async function deleteCobranca(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Cobrança']
        #swagger.description = 'Exclui uma cobrança pelo ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da cobrança',
            required: true,
            type: 'integer'
        }
        #swagger.responses[204] = {
            description: 'Cobrança deletada com sucesso.'
        }
        #swagger.responses[404] = {
            description: 'Cobrança não encontrada.'
        }
    */
    const id = Number(req.params.id);

    if (await CobrancaRepository.deleteCobranca(id))
        res.sendStatus(204);
    else
        res.sendStatus(404);
}

export default {
    getCobranca,
    getCobrancas,
    addCobranca,
    updateCobranca,
    deleteCobranca
}
