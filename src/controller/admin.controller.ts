import Admin from "../model/admin.model";
import AdminRepository from "../repositories/admin.repository";
import { Request,Response, NextFunction } from "express";

async function getAdmin(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    const Admin = await AdminRepository.getAdmin(id);

    if (Admin)
        res.status(200).json(Admin);
    else
        res.sendStatus(404);
}

async function getAdmins(req: Request, res: Response, next: NextFunction) {
    const Admins = await AdminRepository.getAdmins();

    res.status(200).json(Admins);
}

async function addAdmin(req: Request, res: Response, next: NextFunction) {
    const data = req.body as Admin;
    const Admin = await AdminRepository.addAdmin(data);

    res.status(201).json(Admin);
}

async function updateAdmin(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    const data = req.body as Admin;

    const Admin = await AdminRepository.updateAdmin(id, data);

    if (Admin)
        res.status(200).json(Admin);
    else
        res.sendStatus(404);
}

async function deleteAdmin(req: Request, res: Response, next: NextFunction) {
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