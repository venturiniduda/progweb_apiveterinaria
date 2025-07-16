import Prontuario from "../model/prontuario.model";
import ProntuarioRepository from "../repositories/prontuario.repository";
import { Request,Response, NextFunction } from "express";

async function getProntuario(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    const Prontuario = await ProntuarioRepository.getProntuario(id);

    if (Prontuario)
        res.status(200).json(Prontuario);
    else
        res.sendStatus(404);
}

async function getProntuarios(req: Request, res: Response, next: NextFunction) {
    const Prontuarios = await ProntuarioRepository.getProntuarios();

    res.status(200).json(Prontuarios);
}

async function addProntuario(req: Request, res: Response, next: NextFunction) {
    const data = req.body as Prontuario;
    const Prontuario = await ProntuarioRepository.addProntuario(data);

    res.status(201).json(Prontuario);
}

async function updateProntuario(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    const data = req.body as Prontuario;

    const Prontuario = await ProntuarioRepository.updateProntuario(id, data);

    if (Prontuario)
        res.status(200).json(Prontuario);
    else
        res.sendStatus(404);
}

async function deleteProntuario(req: Request, res: Response, next: NextFunction) {
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