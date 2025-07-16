import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Tutor } from "./tutor.model";
import { Consulta } from "./consulta.model";

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  animal_id: number;

  @ManyToOne(() => Tutor, (tutor) => tutor.pacientes, { nullable: false })
  @JoinColumn({ name: 'tutor_id' })
  tutor: Tutor;

  @Column()
  tutor_id: number;

  @Column({ length: 60 })
  nome: string;

  @Column({ length: 1 })
  sexo: string;

  @Column({ length: 60 })
  raca: string;

  @Column({ length: 60 })
  cor_pelagem: string;

  @Column()
  data_nascimento: Date;

  @CreateDateColumn({ type: "timestamp" })
  criado_em: Date;

  @OneToMany(() => Consulta, (consulta) => consulta.tutor)
    consultas: Consulta[];
}

// export default Paciente;