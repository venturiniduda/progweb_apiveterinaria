import { AppDataSource } from "../data-source";
import tutor from "../model/tutor.model";

const repository = AppDataSource.getRepository(tutor);

async function getTutor(id: number): Promise<tutor | null> {
    return await repository.findOneBy({ tutor_id: id });
}

async function getTutores(): Promise<tutor[]> {
    return await repository.find();
}

async function addTutor(data: tutor): Promise<tutor> {
    const novoTutor = repository.create({
        nome: data.nome,
        sobrenome: data.sobrenome,
        cpf: data.cpf,
        data_nascimento: data.data_nascimento,
        rua: data.rua,
        numero: data.numero,
        bairro: data.bairro,
        cidade: data.cidade,
        complemento: data.complemento,
        email: data.email,
        telefone: data.telefone,
        // criado_em será preenchido automaticamente
    });

    return await repository.save(novoTutor);
}

async function updateTutor(id: number, data: tutor): Promise<tutor | null> {
    const tutor = await getTutor(id);

    if (tutor !== null) {
        tutor.nome = data.nome;
        tutor.sobrenome = data.sobrenome;
        tutor.cpf = data.cpf;
        tutor.data_nascimento = data.data_nascimento;
        tutor.rua = data.rua;
        tutor.numero = data.numero;
        tutor.bairro = data.bairro;
        tutor.cidade = data.cidade;
        tutor.complemento = data.complemento;
        tutor.email = data.email;
        tutor.telefone = data.telefone;

        return await repository.save(tutor);
    }

    return null;
}

async function deleteTutor(id: number): Promise<boolean> {
    const result = await repository.delete({ tutor_id: id });

    return !!result.affected;
}

export default {
    getTutor,
    getTutores,
    addTutor,
    updateTutor,
    deleteTutor,
};
