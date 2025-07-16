import { AppDataSource } from "../data-source";
import Cobranca from "../model/cobranca.model";

const repository = AppDataSource.getRepository(Cobranca);

async function getCobranca(id: number): Promise<Cobranca | null> {
    return await repository.findOneBy({ id });
}

async function getCobrancas(): Promise<Cobranca[]> {
    return await repository.find();
}

async function addCobranca(data: Cobranca): Promise<Cobranca> {
    const cobranca = repository.create({
        cliente: data.cliente,
        valor: data.valor,
        status: data.status || "pendente",
    });

    return await repository.save(cobranca);
}

async function updateCobranca(id: number, data: Cobranca): Promise<Cobranca | null> {
    const cobranca = await getCobranca(id);

    if (cobranca !== null) {
        cobranca.cliente = data.cliente;
        cobranca.valor = data.valor;
        cobranca.status = data.status;
        cobranca.dataCriacao = data.dataCriacao;

        return await repository.save(cobranca);
    }

    return null;
}

async function deleteCobranca(id: number): Promise<boolean> {
    const result = await repository.delete({ id });

    return !!result.affected;
}

export default {
    getCobranca,
    getCobrancas,
    addCobranca,
    updateCobranca,
    deleteCobranca,
};
