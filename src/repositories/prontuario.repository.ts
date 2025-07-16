import { AppDataSource } from "../data-source";
import Prontuario from "../model/prontuario.model";

const repository = AppDataSource.getRepository(Prontuario);

async function getProntuario(id: number) : Promise<Prontuario | null> {
    return await repository.findOneBy({ prontuario_id : id});
}

async function getProntuarios() : Promise<Prontuario[]> {
    return await repository.find();
}

async function addProntuario(data: Prontuario) : Promise<Prontuario> {
    const Prontuario = repository.create({
        tipo_atendimento: data.tipo_atendimento,
        queixa_principal: data.queixa_principal,
        historico_medico: data.historico_medico,
        sistema_afetado: data.sistema_afetado,
        detalhes_clinicos: data.detalhes_clinicos
        //criado_em será criado automaticamente
    });
    
    return await repository.save(Prontuario);
}

async function updateProntuario(id: number, data: Prontuario) : Promise<Prontuario | null> {
    const Prontuario = await getProntuario(id);

    if (Prontuario !== null){
        Prontuario.tipo_atendimento = data.tipo_atendimento;
        Prontuario.queixa_principal = data.queixa_principal;
        Prontuario.historico_medico = data.historico_medico;
        Prontuario.sistema_afetado = data.sistema_afetado;
        Prontuario.detalhes_clinicos = data.detalhes_clinicos;
        Prontuario.criado_em = data.criado_em;

        return await repository.save(Prontuario);
    }
    
    return null;
}

async function deleteProntuario(id: number) : Promise<boolean> {
    const result = await repository.delete({ prontuario_id : id});

    if (result.affected != null && result.affected != undefined) {
        return true;
    } 

    return false;
}

export default {
    getProntuario,
    getProntuarios,
    addProntuario,
    updateProntuario,
    deleteProntuario,
}