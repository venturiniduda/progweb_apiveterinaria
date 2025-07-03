import { AppDataSource } from "../data-source";
import Admin from "../model/admin.model";

const repository = AppDataSource.getRepository(Admin);

async function getAdmin(id: number): Promise<Admin | null> {
    return await repository.findOneBy({ admin_id: id });
}

async function getAdmins(): Promise<Admin[]> {
    return await repository.find();
}

async function addAdmin(data: Admin): Promise<Admin> {
    const novoAdmin = repository.create({
        nome: data.nome,
        sobrenome: data.sobrenome,
        cpf: data.cpf,
        cnpj: data.cnpj,
        rua: data.rua,
        numero: data.numero,
        bairro: data.bairro,
        cidade: data.cidade,
        complemento: data.complemento,
        email: data.email,
        telefone: data.telefone,
        cargo: data.cargo,
        data_admissao: data.data_admissao,
        senha_hash: data.senha_hash,
        // criado_em será preenchido automaticamente
    });

    return await repository.save(novoAdmin);
}

async function updateAdmin(id: number, data: Admin): Promise<Admin | null> {
    const admin = await getAdmin(id);

    if (admin !== null) {
        admin.nome = data.nome;
        admin.sobrenome = data.sobrenome;
        admin.cpf = data.cpf;
        admin.cnpj = data.cnpj;
        admin.rua = data.rua;
        admin.numero = data.numero;
        admin.bairro = data.bairro;
        admin.cidade = data.cidade;
        admin.complemento = data.complemento;
        admin.email = data.email;
        admin.telefone = data.telefone;
        admin.cargo = data.cargo;
        admin.data_admissao = data.data_admissao;
        admin.senha_hash = data.senha_hash;

        return await repository.save(admin);
    }

    return null;
}

async function deleteAdmin(id: number): Promise<boolean> {
    const result = await repository.delete({ admin_id: id });
    return !!result.affected;
}

export default {
    getAdmin,
    getAdmins,
    addAdmin,
    updateAdmin,
    deleteAdmin,
};
