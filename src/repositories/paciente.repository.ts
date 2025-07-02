import { AppDataSource } from "../data-source";
import paciente from "../model/paciente.model";

const repository = AppDataSource.getRepository(paciente);

async function getPaciente(id: number) : Promise<paciente | null> {
    return await repository.findOneBy({"id": id});
}

async function getPacientes() : Promise<paciente[]> {
    return await repository.find();
}

async function addPaciente(data: paciente) : Promise<paciente> {
    const paciente = repository.create({
        name: data.name,
        code: data.code
    });
    
    return await repository.save(paciente);
}

async function updatePaciente(id: number, data: paciente) : Promise<paciente | null> {
    const paciente = await getPaciente(id);

    if (paciente !== null){
        paciente.name = data.name;
        paciente.code = data.code;

        return await repository.save(paciente);
    }
    
    return null;
}

async function deletePaciente(id: number) : Promise<boolean> {
    const result = await repository.delete({"id": id});

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