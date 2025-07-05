import { AppDataSource } from "../data-source";
import Estoque from "../model/estoque.model";

const repository = AppDataSource.getRepository(Estoque);

async function getEstoque(id: number) : Promise<Estoque | null> {
    return await repository.findOneBy({ estoque_id : id});
}

async function getEstoques() : Promise<Estoque[]> {
    return await repository.find();
}

async function addEstoque(data: Estoque) : Promise<Estoque> {
    const Estoque = repository.create({
        lote: data.lote,
        validade: data.validade,
        quantidade_atual: data.quantidade_atual,
        quantidade_minima: data.quantidade_minima,
        localizacao: data.localizacao
        //criado_em será criado automaticamente
    });
    
    return await repository.save(Estoque);
}

async function updateEstoque(id: number, data: Estoque) : Promise<Estoque | null> {
    const Estoque = await getEstoque(id);

    if (Estoque !== null){
        Estoque.lote = data.lote;
        Estoque.validade = data.validade;
        Estoque.quantidade_atual = data.quantidade_atual;
        Estoque.quantidade_minima = data.quantidade_minima;
        Estoque.localizacao = data.localizacao;
        Estoque.criado_em = data.criado_em;

        return await repository.save(Estoque);
    }
    
    return null;
}

async function deleteEstoque(id: number) : Promise<boolean> {
    const result = await repository.delete({ estoque_id : id});

    if (result.affected != null && result.affected != undefined) {
        return true;
    } 

    return false;
}

export default {
    getEstoque,
    getEstoques,
    addEstoque,
    updateEstoque,
    deleteEstoque,
}