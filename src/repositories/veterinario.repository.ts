import { AppDataSource } from "../data-source";
import Veterinario from "../model/veterinario.model";

const repository = AppDataSource.getRepository(Veterinario);

async function getVeterinario(id: number) : Promise<Veterinario | null> {
    return await repository.findOneBy({"vet_id": id});
}

async function getVeterinarios() : Promise<Veterinario[]> {
    return await repository.find();
}

async function addVeterinario(data: Veterinario) : Promise<Veterinario> {
    const Veterinario = repository.create({
        nome: data.nome,
        sobrenome: data.sobrenome,
        crmv: data.crmv,
        telefone: data.telefone,
        email: data.email,
        //criado_em será criado automaticamente
    });
    
    return await repository.save(Veterinario);
}

async function updateVeterinario(id: number, data: Veterinario) : Promise<Veterinario | null> {
    const Veterinario = await getVeterinario(id);

    if (Veterinario !== null){
        Veterinario.nome = data.nome;
        Veterinario.sobrenome = data.sobrenome;
        Veterinario.crmv = data.crmv;
        Veterinario.telefone = data.telefone;
        Veterinario.email = data.email;
        Veterinario.criado_em = data.criado_em;

        return await repository.save(Veterinario);
    }
    
    return null;
}

async function deleteVeterinario(id: number) : Promise<boolean> {
    const result = await repository.delete({"vet_id": id});

    if (result.affected != null && result.affected != undefined) {
        return true;
    } 

    return false;
}

export default {
    getVeterinario,
    getVeterinarios,
    addVeterinario,
    updateVeterinario,
    deleteVeterinario,
}