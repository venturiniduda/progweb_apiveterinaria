import Paciente from "../model/paciente.model";
import PacienteRepository from "../repositories/paciente.repository";
import { Request,Response } from "express";

async function getPaciente(req: Request, res: Response) {
    const id = Number(req.params.id);
    const Paciente = await PacienteRepository.getPaciente(id);

    if (Paciente)
        res.status(200).json(Paciente);
    else
        res.sendStatus(404);
}

async function getPacientes(res: Response) {
    const Pacientes = await PacienteRepository.getPacientes();

    res.status(200).json(Pacientes);
}

async function addPaciente(req: Request, res: Response) {
    const data = req.body as Paciente;
    const Paciente = await PacienteRepository.addPaciente(data);

    res.status(201).json(Paciente);
}

async function updatePaciente(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = req.body as Paciente;

    const Paciente = await PacienteRepository.updatePaciente(id, data);

    if (Paciente)
        res.status(200).json(Paciente);
    else
        res.sendStatus(404);
}

async function deletePaciente(req: Request, res: Response) {
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