import { AppDataSource } from "../data-source";
import Medicamento from "../model/medicamento.model";

const repository = AppDataSource.getRepository(Medicamento);

async function getMedicamento(id: number) : Promise<Medicamento | null> {
    return await repository.findOneBy({ med_id : id});
}

async function getMedicamentos() : Promise<Medicamento[]> {
    return await repository.find();
}

async function addMedicamento(data: Medicamento) : Promise<Medicamento> {
    const Medicamento = repository.create({
        nome: data.nome,
        principio_ativo: data.principio_ativo,
        codigo_registro: data.codigo_registro,
        categoria: data.categoria,
        posologia: data.posologia,
        via_administracao: data.via_administracao,
        fabricante: data.fabricante,
        codigo_barras: data.codigo_barras,
        preco_unitario: data.preco_unitario,
        prescricao_obrigatoria: data.prescricao_obrigatoria
        //criado_em será criado automaticamente
    });
    
    return await repository.save(Medicamento);
}

async function updateMedicamento(id: number, data: Medicamento) : Promise<Medicamento | null> {
    const Medicamento = await getMedicamento(id);

    if (Medicamento !== null){
        Medicamento.nome = data.nome;
        Medicamento.principio_ativo = data.principio_ativo;
        Medicamento.codigo_registro = data.codigo_registro;
        Medicamento.categoria = data.categoria;
        Medicamento.posologia = data.posologia;
        Medicamento.via_administracao = data.via_administracao;
        Medicamento.fabricante = data.fabricante;
        Medicamento.codigo_barras = data.codigo_barras;
        Medicamento.preco_unitario = data.preco_unitario;
        Medicamento.prescricao_obrigatoria = data.prescricao_obrigatoria;
        Medicamento.criado_em = data.criado_em;

        return await repository.save(Medicamento);
    }
    
    return null;
}

async function deleteMedicamento(id: number) : Promise<boolean> {
    const result = await repository.delete({ med_id : id});

    if (result.affected != null && result.affected != undefined) {
        return true;
    } 

    return false;
}

export default {
    getMedicamento,
    getMedicamentos,
    addMedicamento,
    updateMedicamento,
    deleteMedicamento,
}