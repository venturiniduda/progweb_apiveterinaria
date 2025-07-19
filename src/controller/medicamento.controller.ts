import Medicamento from "../model/medicamento.model";
import MedicamentoRepository from "../repositories/medicamento.repository";
import { Request, Response } from "express";

async function getMedicamento(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Medicamento']
        #swagger.description = 'Busca um medicamento pelo ID.'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do medicamento',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Medicamento encontrado.',
            schema: { $ref: "#/definitions/Medicamento" }
        }
        #swagger.responses[404] = {
            description: 'Medicamento não encontrado.'
        }
    */
    const id = Number(req.params.id);
    const Medicamento = await MedicamentoRepository.getMedicamento(id);

    if (Medicamento)
        res.status(200).json(Medicamento);
    else
        res.sendStatus(404);
}

async function getMedicamentos(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Medicamento']
        #swagger.description = 'Retorna todos os medicamentos cadastrados.'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.responses[200] = {
            description: 'Lista de medicamentos.',
            schema: [{ $ref: "#/definitions/Medicamento" }]
        }
    */
    const Medicamentos = await MedicamentoRepository.getMedicamentos();

    res.status(200).json(Medicamentos);
}

async function addMedicamento(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Medicamento']
        #swagger.description = 'Cadastra um novo medicamento.'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Dados do novo medicamento.',
            required: true,
            schema: { $ref: "#/definitions/Medicamento" }
        }
        #swagger.responses[201] = {
            description: 'Medicamento criado com sucesso.',
            schema: { $ref: "#/definitions/Medicamento" }
        }
    */
    const data = req.body as Medicamento;
    const Medicamento = await MedicamentoRepository.addMedicamento(data);

    res.status(201).json(Medicamento);
}

async function updateMedicamento(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Medicamento']
        #swagger.description = 'Atualiza os dados de um medicamento existente.'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do medicamento',
            required: true,
            type: 'integer'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Novos dados do medicamento.',
            required: true,
            schema: { $ref: "#/definitions/Medicamento" }
        }
        #swagger.responses[200] = {
            description: 'Medicamento atualizado com sucesso.',
            schema: { $ref: "#/definitions/Medicamento" }
        }
        #swagger.responses[404] = {
            description: 'Medicamento não encontrado.'
        }
    */
    const id = Number(req.params.id);
    const data = req.body as Medicamento;

    const Medicamento = await MedicamentoRepository.updateMedicamento(id, data);

    if (Medicamento)
        res.status(200).json(Medicamento);
    else
        res.sendStatus(404);
}

async function deleteMedicamento(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Medicamento']
        #swagger.description = 'Exclui um medicamento pelo ID.'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do medicamento',
            required: true,
            type: 'integer'
        }
        #swagger.responses[204] = {
            description: 'Medicamento deletado com sucesso.'
        }
        #swagger.responses[404] = {
            description: 'Medicamento não encontrado.'
        }
    */
    const id = Number(req.params.id);

    if (await MedicamentoRepository.deleteMedicamento(id))
        res.sendStatus(204);
    else
        res.sendStatus(404);    
}

export default {
    getMedicamento,
    getMedicamentos,
    addMedicamento,
    updateMedicamento,
    deleteMedicamento
}
