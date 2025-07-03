import { AppDataSource } from "../data-source";
import paciente from "../model/paciente.model";

const repository = AppDataSource.getRepository(paciente);

async function getPaciente(id: number) : Promise<paciente | null> {
    return await repository.findOneBy({"vet_id": id});
}

async function getPacientes() : Promise<paciente[]> {
    return await repository.find();
}

async function addPaciente(data: paciente) : Promise<paciente> {
    const paciente = repository.create({
        nome: data.nome,
        sobrenome: data.sobrenome,
        crmv: data.crmv,
        telefone: data.telefone,
        email: data.email,
        criado_em: data.criado_em
    });
    
    return await repository.save(paciente);
}

async function updatePaciente(id: number, data: paciente) : Promise<paciente | null> {
    const paciente = await getPaciente(id);

    if (paciente !== null){
        paciente.nome = data.nome;
        paciente.sobrenome = data.sobrenome;
        paciente.crmv = data.crmv;
        paciente.telefone = data.telefone;
        paciente.email = data.email;
        paciente.criado_em = data.criado_em;

        return await repository.save(paciente);
    }
    
    return null;
}

async function deletePaciente(id: number) : Promise<boolean> {
    const result = await repository.delete({"vet_id": id});

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