import Consulta from "../model/consulta.model";
import ConsultaRepository from "../repositories/consulta.repository";
import { Request,Response, NextFunction } from "express";

async function getConsulta(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    const Consulta = await ConsultaRepository.getConsulta(id);

    if (Consulta)
        res.status(200).json(Consulta);
    else
        res.sendStatus(404);
}

async function getConsultas(req: Request, res: Response, next: NextFunction) {
    const Consultas = await ConsultaRepository.getConsultas();

    res.status(200).json(Consultas);
}

async function addConsulta(req: Request, res: Response, next: NextFunction) {
    const data = req.body as Consulta;
    const Consulta = await ConsultaRepository.addConsulta(data);

    res.status(201).json(Consulta);
}

async function updateConsulta(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    const data = req.body as Consulta;

    const Consulta = await ConsultaRepository.updateConsulta(id, data);

    if (Consulta)
        res.status(200).json(Consulta);
    else
        res.sendStatus(404);
}

async function deleteConsulta(req: Request, res: Response, next: NextFunction) {
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