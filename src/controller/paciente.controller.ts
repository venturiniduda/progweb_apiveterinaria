import Paciente from "../model/paciente.model";
import PacienteRepository from "../repositories/paciente.repository";
import { Request, Response } from "express";

async function getPaciente(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Paciente']
        #swagger.description = 'Busca um paciente pelo ID.'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do paciente',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Paciente encontrado.',
            schema: { $ref: "#/definitions/Paciente" }
        }
        #swagger.responses[404] = {
            description: 'Paciente não encontrado.'
        }
    */
    const id = Number(req.params.id);
    const Paciente = await PacienteRepository.getPaciente(id);

    if (Paciente)
        res.status(200).json(Paciente);
    else
        res.sendStatus(404);
}

async function getPacientes(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Paciente']
        #swagger.description = 'Retorna todos os pacientes cadastrados.'
        #swagger.responses[200] = {
            description: 'Lista de pacientes.',
            schema: [{ $ref: "#/definitions/Paciente" }]
        }
    */
    const Pacientes = await PacienteRepository.getPacientes();

    res.status(200).json(Pacientes);
}

async function addPaciente(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Paciente']
        #swagger.description = 'Cadastra um novo paciente.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Dados do novo paciente.',
            required: true,
            schema: { $ref: "#/definitions/Paciente" }
        }
        #swagger.responses[201] = {
            description: 'Paciente criado com sucesso.',
            schema: { $ref: "#/definitions/Paciente" }
        }
    */
    const data = req.body as Paciente;
    const Paciente = await PacienteRepository.addPaciente(data);

    res.status(201).json(Paciente);
}

async function updatePaciente(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Paciente']
        #swagger.description = 'Atualiza os dados de um paciente existente.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do paciente',
            required: true,
            type: 'integer'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Novos dados do paciente.',
            required: true,
            schema: { $ref: "#/definitions/Paciente" }
        }
        #swagger.responses[200] = {
            description: 'Paciente atualizado com sucesso.',
            schema: { $ref: "#/definitions/Paciente" }
        }
        #swagger.responses[404] = {
            description: 'Paciente não encontrado.'
        }
    */
    const id = Number(req.params.id);
    const data = req.body as Paciente;

    const Paciente = await PacienteRepository.updatePaciente(id, data);

    if (Paciente)
        res.status(200).json(Paciente);
    else
        res.sendStatus(404);
}

async function deletePaciente(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Paciente']
        #swagger.description = 'Exclui um paciente pelo ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do paciente',
            required: true,
            type: 'integer'
        }
        #swagger.responses[204] = {
            description: 'Paciente deletado com sucesso.'
        }
        #swagger.responses[404] = {
            description: 'Paciente não encontrado.'
        }
    */
    const id = Number(req.params.id);

    if (await PacienteRepository.deletePaciente(id))
        res.sendStatus(204);
    else
        res.sendStatus(404);    
}

export default {
    getPaciente,
    getPacientes,
    addPaciente,
    updatePaciente,
    deletePaciente
}
