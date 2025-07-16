import { AppDataSource } from "../data-source";
import Notificacao from "../model/notificacao.model";

const repository = AppDataSource.getRepository(Notificacao);

async function getNotificacao(id: number): Promise<Notificacao | null> {
    return await repository.findOneBy({ id });
}

async function getNotificacoes(): Promise<Notificacao[]> {
    return await repository.find();
}

async function addNotificacao(data: Notificacao): Promise<Notificacao> {
    const notificacao = repository.create({
        mensagem: data.mensagem,
        tipo: data.tipo,
        // dataEnvio será preenchido automaticamente
    });

    return await repository.save(notificacao);
}

async function updateNotificacao(id: number, data: Notificacao): Promise<Notificacao | null> {
    const notificacao = await getNotificacao(id);

    if (notificacao !== null) {
        notificacao.mensagem = data.mensagem;
        notificacao.tipo = data.tipo;
        notificacao.dataEnvio = data.dataEnvio;

        return await repository.save(notificacao);
    }

    return null;
}

async function deleteNotificacao(id: number): Promise<boolean> {
    const result = await repository.delete({ id });

    return !!result.affected;
}

export default {
    getNotificacao,
    getNotificacoes,
    addNotificacao,
    updateNotificacao,
    deleteNotificacao,
};
