import Veterinario from "../model/veterinario.model";
import VeterinarioRepository from "../repositories/veterinario.repository";
import { Request,Response, NextFunction } from "express";

async function getVeterinario(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    const Veterinario = await VeterinarioRepository.getVeterinario(id);

    if (Veterinario)
        res.status(200).json(Veterinario);
    else
        res.sendStatus(404);
}

async function getVeterinarios(req: Request, res: Response, next: NextFunction) {
    const Veterinarios = await VeterinarioRepository.getVeterinarios();

    res.status(200).json(Veterinarios);
}

async function addVeterinario(req: Request, res: Response, next: NextFunction) {
    const data = req.body as Veterinario;
    const Veterinario = await VeterinarioRepository.addVeterinario(data);

    res.status(201).json(Veterinario);
}

async function updateVeterinario(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    const data = req.body as Veterinario;

    const Veterinario = await VeterinarioRepository.updateVeterinario(id, data);

    if (Veterinario)
        res.status(200).json(Veterinario);
    else
        res.sendStatus(404);
}

async function deleteVeterinario(req: Request, res: Response, next: NextFunction) {
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