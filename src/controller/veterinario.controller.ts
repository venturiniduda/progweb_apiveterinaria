import Veterinario from "../model/veterinario.model";
import VeterinarioRepository from "../repositories/veterinario.repository";
import { Request, Response } from "express";

async function getVeterinario(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Veterinário']
        #swagger.description = 'Busca um veterinário pelo ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do veterinário',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Veterinário encontrado.',
            schema: { $ref: "#/definitions/Veterinario" }
        }
        #swagger.responses[404] = {
            description: 'Veterinário não encontrado.'
        }
    */
    const id = Number(req.params.id);
    const Veterinario = await VeterinarioRepository.getVeterinario(id);

    if (Veterinario)
        res.status(200).json(Veterinario);
    else
        res.sendStatus(404);
}


async function getVeterinarios(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Veterinário']
        #swagger.description = 'Retorna todos os veterinários cadastrados.'
        #swagger.responses[200] = {
            description: 'Lista de veterinários.',
            schema: [{ $ref: "#/definitions/Veterinario" }]
        }
    */
    const Veterinarios = await VeterinarioRepository.getVeterinarios();
    res.status(200).json(Veterinarios);
}


async function addVeterinario(req: Request, res: Response) {
    /*  #swagger.tags = ['Veterinário']
        #swagger.description = 'Cadastra um novo veterinário.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Dados do veterinário a ser criado.',
            required: true,
            schema: { $ref: "#/definitions/Veterinario" }
        }
        #swagger.responses[201] = {
            description: 'Veterinário criado com sucesso.',
            schema: { $ref: "#/definitions/Veterinario" }
        }
    */
    const data = req.body as Veterinario;
    const Veterinario = await VeterinarioRepository.addVeterinario(data);
    res.status(201).json(Veterinario);
}


async function updateVeterinario(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Veterinário']
        #swagger.description = 'Atualiza os dados de um veterinário existente.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do veterinário',
            required: true,
            type: 'integer'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Novos dados do veterinário.',
            required: true,
            schema: { $ref: "#/definitions/Veterinario" }
        }
        #swagger.responses[200] = {
            description: 'Veterinário atualizado com sucesso.',
            schema: { $ref: "#/definitions/Veterinario" }
        }
        #swagger.responses[404] = {
            description: 'Veterinário não encontrado.'
        }
    */
    const id = Number(req.params.id);
    const data = req.body as Veterinario;
    const Veterinario = await VeterinarioRepository.updateVeterinario(id, data);

    if (Veterinario)
        res.status(200).json(Veterinario);
    else
        res.sendStatus(404);
}


async function deleteVeterinario(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Veterinário']
        #swagger.description = 'Exclui um veterinário pelo ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do veterinário',
            required: true,
            type: 'integer'
        }
        #swagger.responses[204] = {
            description: 'Veterinário deletado com sucesso.'
        }
        #swagger.responses[404] = {
            description: 'Veterinário não encontrado.'
        }
    */

    const id = Number(req.params.id);

    if (await VeterinarioRepository.deleteVeterinario(id))
        res.sendStatus(204);
    else
        res.sendStatus(404);    
}

export default {
    getVeterinario,
    getVeterinarios,
    addVeterinario,
    updateVeterinario,
    deleteVeterinario
}