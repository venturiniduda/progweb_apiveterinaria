import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
class Veterinario {
    @PrimaryGeneratedColumn()
    vet_id: number;

    @Column({ length: 60 })
    nome: string;

    @Column({ length: 60 })
    sobrenome: string;

    @Column({ length: 14 })
    crmv: string;

    @Column({ length: 11})
    telefone: string;

    @Column({ length: 30})
    email: string;

    @CreateDateColumn({ type: "timestamp" })
      criado_em: Date;
}

export default Veterinario;