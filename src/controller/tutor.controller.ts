import Tutor from "../model/tutor.model";
import TutorRepository from "../repositories/tutor.repository";
import { Request, Response } from "express";

async function getTutor(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Tutor']
        #swagger.description = 'Busca um tutor pelo ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do tutor',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Tutor encontrado.',
            schema: { $ref: "#/definitions/Tutor" }
        }
        #swagger.responses[404] = {
            description: 'Tutor não encontrado.'
        }
    */
    const id = Number(req.params.id);
    const tutor = await TutorRepository.getTutor(id);

    if (tutor)
        res.status(200).json(tutor);
    else
        res.sendStatus(404);
}

async function getTutores(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Tutor']
        #swagger.description = 'Retorna todos os tutores cadastrados.'
        #swagger.responses[200] = {
            description: 'Lista de tutores.',
            schema: [{ $ref: "#/definitions/Tutor" }]
        }
    */
    const tutores = await TutorRepository.getTutores();
    res.status(200).json(tutores);
}

async function addTutor(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Tutor']
        #swagger.description = 'Cadastra um novo tutor.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Dados do tutor a ser criado.',
            required: true,
            schema: { $ref: "#/definitions/Tutor" }
        }
        #swagger.responses[201] = {
            description: 'Tutor criado com sucesso.',
            schema: { $ref: "#/definitions/Tutor" }
        }
    */
    const data = req.body as Tutor;
    const tutor = await TutorRepository.addTutor(data);
    res.status(201).json(tutor);
}

async function updateTutor(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Tutor']
        #swagger.description = 'Atualiza os dados de um tutor existente.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do tutor',
            required: true,
            type: 'integer'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Novos dados do tutor.',
            required: true,
            schema: { $ref: "#/definitions/Tutor" }
        }
        #swagger.responses[200] = {
            description: 'Tutor atualizado com sucesso.',
            schema: { $ref: "#/definitions/Tutor" }
        }
        #swagger.responses[404] = {
            description: 'Tutor não encontrado.'
        }
    */
    const id = Number(req.params.id);
    const data = req.body as Tutor;
    const tutor = await TutorRepository.updateTutor(id, data);

    if (tutor)
        res.status(200).json(tutor);
    else
        res.sendStatus(404);
}

async function deleteTutor(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Tutor']
        #swagger.description = 'Exclui um tutor pelo ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do tutor',
            required: true,
            type: 'integer'
        }
        #swagger.responses[204] = {
            description: 'Tutor deletado com sucesso.'
        }
        #swagger.responses[404] = {
            description: 'Tutor não encontrado.'
        }
    */
    const id = Number(req.params.id);

    if (await TutorRepository.deleteTutor(id))
        res.sendStatus(204);
    else
        res.sendStatus(404);
}

export default {
    getTutor,
    getTutores,
    addTutor,
    updateTutor,
    deleteTutor
}
