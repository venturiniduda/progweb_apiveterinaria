import Cobranca from "../model/cobranca.model";
import CobrancaRepository from "../repositories/cobranca.repository";
import { Request, Response } from "express";

async function getCobranca(req: Request, res: Response) {
    const id = Number(req.params.id);
    const cobranca = await CobrancaRepository.getCobranca(id);

    if (cobranca)
        res.status(200).json(cobranca);
    else
        res.sendStatus(404);
}

async function getCobrancas(_: Request, res: Response) {
    const cobrancas = await CobrancaRepository.getCobrancas();
    res.status(200).json(cobrancas);
}

async function addCobranca(req: Request, res: Response) {
    const data = req.body as Cobranca;
    const nova = await CobrancaRepository.addCobranca(data);

    res.status(201).json(nova);
}

async function updateCobranca(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = req.body as Cobranca;

    const atualizada = await CobrancaRepository.updateCobranca(id, data);

    if (atualizada)
        res.status(200).json(atualizada);
    else
        res.sendStatus(404);
}

async function deleteCobranca(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (await CobrancaRepository.deleteCobranca(id))
        res.sendStatus(204);
    else
        res.sendStatus(404);
}

export default {
    getCobranca,
    getCobrancas,
    addCobranca,
    updateCobranca,
    deleteCobranca,
};
