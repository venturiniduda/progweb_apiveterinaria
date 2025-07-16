import Receita from "../model/receita.model";
import ReceitaRepository from "../repositories/receita.repository";
import { Request, Response } from "express";

async function getReceita(req: Request, res: Response) {
    const id = Number(req.params.id);
    const receita = await ReceitaRepository.getReceita(id);

    if (receita)
        res.status(200).json(receita);
    else
        res.sendStatus(404);
}

async function getReceitas(_: Request, res: Response) {
    const receitas = await ReceitaRepository.getReceitas();
    res.status(200).json(receitas);
}

async function addReceita(req: Request, res: Response) {
    const data = req.body as Receita;
    const receita = await ReceitaRepository.addReceita(data);

    res.status(201).json(receita);
}

async function updateReceita(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = req.body as Receita;

    const receita = await ReceitaRepository.updateReceita(id, data);

    if (receita)
        res.status(200).json(receita);
    else
        res.sendStatus(404);
}

async function deleteReceita(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (await ReceitaRepository.deleteReceita(id))
        res.sendStatus(204);
    else
        res.sendStatus(404);
}

export default {
    getReceita,
    getReceitas,
    addReceita,
    updateReceita,
    deleteReceita,
};
