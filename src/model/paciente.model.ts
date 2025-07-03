import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Paciente {
    @PrimaryGeneratedColumn()
    vet_id: number;

    @Column()
    nome: string;

    @Column()
    sobrenome: string;

    @Column()
    crmv: string;

    @Column()
    telefone: string;

    @Column()
    email: string;

    @Column()
    criado_em: Date;
}

export default Paciente;