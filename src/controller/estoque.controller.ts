import Estoque from "../model/estoque.model";
import EstoqueRepository from "../repositories/estoque.repository";
import { Request,Response } from "express";

async function getEstoque(req: Request, res: Response) {
    const id = Number(req.params.id);
    const Estoque = await EstoqueRepository.getEstoque(id);

    if (Estoque)
        res.status(200).json(Estoque);
    else
        res.sendStatus(404);
}

async function getEstoques(res: Response) {
    const Estoques = await EstoqueRepository.getEstoques();

    res.status(200).json(Estoques);
}

async function addEstoque(req: Request, res: Response) {
    const data = req.body as Estoque;
    const Estoque = await EstoqueRepository.addEstoque(data);

    res.status(201).json(Estoque);
}

async function updateEstoque(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = req.body as Estoque;

    const Estoque = await EstoqueRepository.updateEstoque(id, data);

    if (Estoque)
        res.status(200).json(Estoque);
    else
        res.sendStatus(404);
}

async function deleteEstoque(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (await EstoqueRepository.deleteEstoque(id))
        res.sendStatus(204);
    else
        res.sendStatus(404);    
}

export default {
    getEstoque,
    getEstoques,
    addEstoque,
    updateEstoque,
    deleteEstoque
}