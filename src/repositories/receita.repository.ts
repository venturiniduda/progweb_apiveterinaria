import { AppDataSource } from "../data-source";
import Receita from "../model/receita.model";

const repository = AppDataSource.getRepository(Receita);

async function getReceita(id: number): Promise<Receita | null> {
    return await repository.findOneBy({ id });
}

async function getReceitas(): Promise<Receita[]> {
    return await repository.find();
}

async function addReceita(data: Receita): Promise<Receita> {
    const receita = repository.create({
        descricao: data.descricao,
        valor: data.valor,
        // data será criada automaticamente
    });

    return await repository.save(receita);
}

async function updateReceita(id: number, data: Receita): Promise<Receita | null> {
    const receita = await getReceita(id);

    if (receita !== null) {
        receita.descricao = data.descricao;
        receita.valor = data.valor;
        receita.data = data.data;

        return await repository.save(receita);
    }

    return null;
}

async function deleteReceita(id: number): Promise<boolean> {
    const result = await repository.delete({ id });

    return !!result.affected;
}

export default {
    getReceita,
    getReceitas,
    addReceita,
    updateReceita,
    deleteReceita,
};
