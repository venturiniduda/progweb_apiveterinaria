import Admin from "../model/admin.model";
import AdminRepository from "../repositories/admin.repository";
import { Request, Response } from "express";

async function getAdmin(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Admins']
        #swagger.description = 'Busca um administrador pelo ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do administrador',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Administrador encontrado.',
            schema: { $ref: "#/definitions/Admin" }
        }
        #swagger.responses[404] = {
            description: 'Administrador não encontrado.'
        }
    */
    const id = Number(req.params.id);
    const Admin = await AdminRepository.getAdmin(id);

    if (Admin)
        res.status(200).json(Admin);
    else
        res.sendStatus(404);
}

async function getAdmins(_: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Admins']
        #swagger.description = 'Retorna todos os administradores cadastrados.'
        #swagger.responses[200] = {
            description: 'Lista de administradores.',
            schema: [{ $ref: "#/definitions/Admin" }]
        }
    */
    const Admins = await AdminRepository.getAdmins();

    res.status(200).json(Admins);
}

async function addAdmin(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Admins']
        #swagger.description = 'Cadastra um novo administrador.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Dados do novo administrador.',
            required: true,
            schema: { $ref: "#/definitions/Admin" }
        }
        #swagger.responses[201] = {
            description: 'Administrador criado com sucesso.',
            schema: { $ref: "#/definitions/Admin" }
        }
    */
    const data = req.body as Admin;
    const Admin = await AdminRepository.addAdmin(data);

    res.status(201).json(Admin);
}

async function updateAdmin(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Admins']
        #swagger.description = 'Atualiza os dados de um administrador existente.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do administrador',
            required: true,
            type: 'integer'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Novos dados do administrador.',
            required: true,
            schema: { $ref: "#/definitions/Admin" }
        }
        #swagger.responses[200] = {
            description: 'Administrador atualizado com sucesso.',
            schema: { $ref: "#/definitions/Admin" }
        }
        #swagger.responses[404] = {
            description: 'Administrador não encontrado.'
        }
    */
    const id = Number(req.params.id);
    const data = req.body as Admin;

    const Admin = await AdminRepository.updateAdmin(id, data);

    if (Admin)
        res.status(200).json(Admin);
    else
        res.sendStatus(404);
}

async function deleteAdmin(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Admins']
        #swagger.description = 'Exclui um administrador pelo ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do administrador',
            required: true,
            type: 'integer'
        }
        #swagger.responses[204] = {
            description: 'Administrador deletado com sucesso.'
        }
        #swagger.responses[404] = {
            description: 'Administrador não encontrado.'
        }
    */
    const id = Number(req.params.id);

    if (await AdminRepository.deleteAdmin(id))
        res.sendStatus(204);
    else
        res.sendStatus(404);    
}

export default {
    getAdmin,
    getAdmins,
    addAdmin,
    updateAdmin,
    deleteAdmin
}
