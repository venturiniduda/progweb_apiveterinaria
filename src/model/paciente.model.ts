import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
import Tutor from "./tutor.model";

@Entity()
class Paciente {
    @PrimaryGeneratedColumn()
    animal_id: number;

    @ManyToOne(() => Tutor, tutor => tutor.Paciente)
    tutor: Tutor;

    @Column()
    nome: string;

    @Column()
    sexo: string;

    @Column()
    raca: string;

    @Column()
    cor_pelagem: string;

    @Column()
    data_nascimento: string;

    @CreateDateColumn({ type: "timestamp" })
      criado_em: Date;
}

export default Paciente;