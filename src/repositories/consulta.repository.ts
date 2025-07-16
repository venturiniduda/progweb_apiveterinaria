import { AppDataSource } from "../data-source";
import Consulta from "../model/consulta.model";

const repository = AppDataSource.getRepository(Consulta);

async function getConsulta(id: number) : Promise<Consulta | null> {
    return await repository.findOneBy({ consulta_id : id});
}

async function getConsultas() : Promise<Consulta[]> {
    return await repository.find();
}

async function addConsulta(data: Consulta) : Promise<Consulta> {
    const Consulta = repository.create({
        data_consulta: data.data_consulta,
        hora_consulta: data.hora_consulta,
        status: data.status
        //criado_em será criado automaticamente
    });
    
    return await repository.save(Consulta);
}

async function updateConsulta(id: number, data: Consulta) : Promise<Consulta | null> {
    const Consulta = await getConsulta(id);

    if (Consulta !== null){
        Consulta.data_consulta = data.data_consulta;
        Consulta.hora_consulta = data.hora_consulta;
        Consulta.status = data.status;
        Consulta.criado_em = data.criado_em;

        return await repository.save(Consulta);
    }
    
    return null;
}

async function deleteConsulta(id: number) : Promise<boolean> {
    const result = await repository.delete({ consulta_id : id});

    if (result.affected != null && result.affected != undefined) {
        return true;
    } 

    return false;
}

export default {
    getConsulta,
    getConsultas,
    addConsulta,
    updateConsulta,
    deleteConsulta,
}