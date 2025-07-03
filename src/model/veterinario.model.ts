import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
class Veterinario {
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

    @CreateDateColumn({ type: "timestamp" })
      criado_em: Date;
}

export default Veterinario;