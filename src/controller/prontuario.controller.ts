import Prontuario from "../model/prontuario.model";
import ProntuarioRepository from "../repositories/prontuario.repository";
import { Request, Response } from "express";

async function getProntuario(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Prontuário']
        #swagger.description = 'Busca um prontuário pelo ID.'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do prontuário',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Prontuário encontrado.',
            schema: { $ref: "#/definitions/Prontuario" }
        }
        #swagger.responses[404] = {
            description: 'Prontuário não encontrado.'
        }
    */
    const id = Number(req.params.id);
    const Prontuario = await ProntuarioRepository.getProntuario(id);

    if (Prontuario)
        res.status(200).json(Prontuario);
    else
        res.sendStatus(404);
}

async function getProntuarios(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Prontuário']
        #swagger.description = 'Retorna todos os prontuários cadastrados.'
        #swagger.responses[200] = {
            description: 'Lista de prontuários.',
            schema: [{ $ref: "#/definitions/Prontuario" }]
        }
    */
    const Prontuarios = await ProntuarioRepository.getProntuarios();

    res.status(200).json(Prontuarios);
}

async function addProntuario(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Prontuário']
        #swagger.description = 'Cadastra um novo prontuário.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Dados do novo prontuário.',
            required: true,
            schema: { $ref: "#/definitions/Prontuario" }
        }
        #swagger.responses[201] = {
            description: 'Prontuário criado com sucesso.',
            schema: { $ref: "#/definitions/Prontuario" }
        }
    */
    const data = req.body as Prontuario;
    const Prontuario = await ProntuarioRepository.addProntuario(data);

    res.status(201).json(Prontuario);
}

async function updateProntuario(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Prontuário']
        #swagger.description = 'Atualiza os dados de um prontuário existente.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do prontuário',
            required: true,
            type: 'integer'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Novos dados do prontuário.',
            required: true,
            schema: { $ref: "#/definitions/Prontuario" }
        }
        #swagger.responses[200] = {
            description: 'Prontuário atualizado com sucesso.',
            schema: { $ref: "#/definitions/Prontuario" }
        }
        #swagger.responses[404] = {
            description: 'Prontuário não encontrado.'
        }
    */
    const id = Number(req.params.id);
    const data = req.body as Prontuario;

    const Prontuario = await ProntuarioRepository.updateProntuario(id, data);

    if (Prontuario)
        res.status(200).json(Prontuario);
    else
        res.sendStatus(404);
}

async function deleteProntuario(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Prontuário']
        #swagger.description = 'Exclui um prontuário pelo ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do prontuário',
            required: true,
            type: 'integer'
        }
        #swagger.responses[204] = {
            description: 'Prontuário deletado com sucesso.'
        }
        #swagger.responses[404] = {
            description: 'Prontuário não encontrado.'
        }
    */
    const id = Number(req.params.id);

    if (await ProntuarioRepository.deleteProntuario(id))
        res.sendStatus(204);
    else
        res.sendStatus(404);    
}

export default {
    getProntuario,
    getProntuarios,
    addProntuario,
    updateProntuario,
    deleteProntuario
}
