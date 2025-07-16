import Tutor from "../model/tutor.model";
import TutorRepository from "../repositories/tutor.repository";
import { Request,Response } from "express";

async function getTutor(req: Request, res: Response) {
    const id = Number(req.params.id);
    const Tutor = await TutorRepository.getTutor(id);

    if (Tutor)
        res.status(200).json(Tutor);
    else
        res.sendStatus(404);
}

async function getTutores(res: Response) {
    const Tutors = await TutorRepository.getTutores();

    res.status(200).json(Tutors);
}

async function addTutor(req: Request, res: Response) {
    const data = req.body as Tutor;
    const Tutor = await TutorRepository.addTutor(data);

    res.status(201).json(Tutor);
}

async function updateTutor(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = req.body as Tutor;

    const Tutor = await TutorRepository.updateTutor(id, data);

    if (Tutor)
        res.status(200).json(Tutor);
    else
        res.sendStatus(404);
}

async function deleteTutor(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (await TutorRepository.deleteTutor(id))
        res.sendStatus(204);
    else
        res.sendStatus(404);    
}

export default {
    getTutor,
    getTutores,
    addTutor,
    updateTutor,
    deleteTutor
}