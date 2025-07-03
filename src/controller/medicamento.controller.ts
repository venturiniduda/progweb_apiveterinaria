import Medicamento from "../model/medicamento.model";
import MedicamentoRepository from "../repositories/medicamento.repository";
import { Request,Response, NextFunction } from "express";

async function getMedicamento(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    const Medicamento = await MedicamentoRepository.getMedicamento(id);

    if (Medicamento)
        res.status(200).json(Medicamento);
    else
        res.sendStatus(404);
}

async function getMedicamentos(req: Request, res: Response, next: NextFunction) {
    const Medicamentos = await MedicamentoRepository.getMedicamentos();

    res.status(200).json(Medicamentos);
}

async function addMedicamento(req: Request, res: Response, next: NextFunction) {
    const data = req.body as Medicamento;
    const Medicamento = await MedicamentoRepository.addMedicamento(data);

    res.status(201).json(Medicamento);
}

async function updateMedicamento(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    const data = req.body as Medicamento;

    const Medicamento = await MedicamentoRepository.updateMedicamento(id, data);

    if (Medicamento)
        res.status(200).json(Medicamento);
    else
        res.sendStatus(404);
}

async function deleteMedicamento(req: Request, res: Response, next: NextFunction) {
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