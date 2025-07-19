import Consulta from "../model/consulta.model";
import ConsultaRepository from "../repositories/consulta.repository";
import { Request, Response } from "express";

async function getConsulta(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Consulta']
        #swagger.description = 'Busca uma consulta pelo ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da consulta',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Consulta encontrada.',
            schema: { $ref: "#/definitions/Consulta" }
        }
        #swagger.responses[404] = {
            description: 'Consulta não encontrada.'
        }
    */
    const id = Number(req.params.id);
    const consulta = await ConsultaRepository.getConsulta(id);

    if (consulta)
        res.status(200).json(consulta);
    else
        res.sendStatus(404);
}

async function getConsultas(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Consulta']
        #swagger.description = 'Retorna todas as consultas cadastradas.'
        #swagger.responses[200] = {
            description: 'Lista de consultas.',
            schema: [{ $ref: "#/definitions/Consulta" }]
        }
    */
    const consultas = await ConsultaRepository.getConsultas();
    res.status(200).json(consultas);
}

async function addConsulta(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Consulta']
        #swagger.description = 'Cadastra uma nova consulta.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Dados da nova consulta.',
            required: true,
            schema: { $ref: "#/definitions/Consulta" }
        }
        #swagger.responses[201] = {
            description: 'Consulta criada com sucesso.',
            schema: { $ref: "#/definitions/Consulta" }
        }
    */
    const data = req.body as Consulta;
    const consulta = await ConsultaRepository.addConsulta(data);
    res.status(201).json(consulta);
}

async function updateConsulta(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Consulta']
        #swagger.description = 'Atualiza os dados de uma consulta existente.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da consulta',
            required: true,
            type: 'integer'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Novos dados da consulta.',
            required: true,
            schema: { $ref: "#/definitions/Consulta" }
        }
        #swagger.responses[200] = {
            description: 'Consulta atualizada com sucesso.',
            schema: { $ref: "#/definitions/Consulta" }
        }
        #swagger.responses[404] = {
            description: 'Consulta não encontrada.'
        }
    */
    const id = Number(req.params.id);
    const data = req.body as Consulta;
    const consulta = await ConsultaRepository.updateConsulta(id, data);

    if (consulta)
        res.status(200).json(consulta);
    else
        res.sendStatus(404);
}

async function deleteConsulta(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Consulta']
        #swagger.description = 'Exclui uma consulta pelo ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da consulta',
            required: true,
            type: 'integer'
        }
        #swagger.responses[204] = {
            description: 'Consulta deletada com sucesso.'
        }
        #swagger.responses[404] = {
            description: 'Consulta não encontrada.'
        }
    */
    const id = Number(req.params.id);

    if (await ConsultaRepository.deleteConsulta(id))
        res.sendStatus(204);
    else
        res.sendStatus(404);
}

export default {
    getConsulta,
    getConsultas,
    addConsulta,
    updateConsulta,
    deleteConsulta
}
