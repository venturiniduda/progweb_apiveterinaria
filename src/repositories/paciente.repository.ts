import { AppDataSource } from "../data-source";
import paciente from "../model/paciente.model";

const repository = AppDataSource.getRepository(paciente);

async function getPaciente(id: number) : Promise<paciente | null> {
    return await repository.findOneBy({ animal_id : id});
}

async function getPacientes() : Promise<paciente[]> {
    return await repository.find();
}

async function addPaciente(data: paciente) : Promise<paciente> {
    const paciente = repository.create({
        tutor_id: data.tutor_id,
        nome: data.nome,
        sexo: data.sexo,
        raca: data.raca,
        cor_pelagem: data.cor_pelagem,
        data_nascimento: data.data_nascimento,
        //criado_em será criado automaticamente
    });
    
    return await repository.save(paciente);
}

async function updatePaciente(id: number, data: paciente) : Promise<paciente | null> {
    const paciente = await getPaciente(id);

    if (paciente !== null){
        paciente.tutor_id = data.tutor_id;
        paciente.nome = data.nome;
        paciente.sexo = data.sexo;
        paciente.raca = data.raca;
        paciente.cor_pelagem = data.cor_pelagem;
        paciente.data_nascimento = data.data_nascimento;
        paciente.criado_em = data.criado_em;

        return await repository.save(paciente);
    }
    
    return null;
}

async function deletePaciente(id: number) : Promise<boolean> {
    const result = await repository.delete({ animal_id : id});

    if (result.affected != null && result.affected != undefined) {
        return true;
    } 

    return false;
}

export default {
    getPaciente,
    getPacientes,
    addPaciente,
    updatePaciente,
    deletePaciente,
}