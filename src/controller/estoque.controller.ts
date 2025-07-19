import Estoque from "../model/estoque.model";
import EstoqueRepository from "../repositories/estoque.repository";
import { Request, Response } from "express";

async function getEstoque(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Estoque']
        #swagger.description = 'Busca um estoque pelo ID.'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do estoque',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Estoque encontrado.',
            schema: { $ref: "#/definitions/Estoque" }
        }
        #swagger.responses[404] = {
            description: 'Estoque não encontrado.'
        }
    */
    const id = Number(req.params.id);
    const Estoque = await EstoqueRepository.getEstoque(id);

    if (Estoque)
        res.status(200).json(Estoque);
    else
        res.sendStatus(404);
}

async function getEstoques(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Estoque']
        #swagger.description = 'Retorna todos os estoques cadastrados.'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.responses[200] = {
            description: 'Lista de estoques.',
            schema: [{ $ref: "#/definitions/Estoque" }]
        }
    */
    const Estoques = await EstoqueRepository.getEstoques();

    res.status(200).json(Estoques);
}

async function addEstoque(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Estoque']
        #swagger.description = 'Cadastra um novo estoque.'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Dados do novo estoque.',
            required: true,
            schema: { $ref: "#/definitions/Estoque" }
        }
        #swagger.responses[201] = {
            description: 'Estoque criado com sucesso.',
            schema: { $ref: "#/definitions/Estoque" }
        }
    */
    const data = req.body as Estoque;
    const Estoque = await EstoqueRepository.addEstoque(data);

    res.status(201).json(Estoque);
}

async function updateEstoque(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Estoque']
        #swagger.description = 'Atualiza os dados de um estoque existente.'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do estoque',
            required: true,
            type: 'integer'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Novos dados do estoque.',
            required: true,
            schema: { $ref: "#/definitions/Estoque" }
        }
        #swagger.responses[200] = {
            description: 'Estoque atualizado com sucesso.',
            schema: { $ref: "#/definitions/Estoque" }
        }
        #swagger.responses[404] = {
            description: 'Estoque não encontrado.'
        }
    */
    const id = Number(req.params.id);
    const data = req.body as Estoque;

    const Estoque = await EstoqueRepository.updateEstoque(id, data);

    if (Estoque)
        res.status(200).json(Estoque);
    else
        res.sendStatus(404);
}

async function deleteEstoque(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Estoque']
        #swagger.description = 'Exclui um estoque pelo ID.'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do estoque',
            required: true,
            type: 'integer'
        }
        #swagger.responses[204] = {
            description: 'Estoque deletado com sucesso.'
        }
        #swagger.responses[404] = {
            description: 'Estoque não encontrado.'
        }
    */
    const id = Number(req.params.id);

    if (await EstoqueRepository.deleteEstoque(id))
        res.sendStatus(204);
    else
        res.sendStatus(404);
}

export default {
    getEstoque,
    getEstoques,
    addEstoque,
    updateEstoque,
    deleteEstoque
}
