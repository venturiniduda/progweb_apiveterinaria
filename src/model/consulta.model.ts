import { PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Paciente } from "./paciente.model";
import Tutor from "./tutor.model";
import Veterinario from "./veterinario.model";
import Prontuario from "./prontuario.model";

export class Consulta {
  @PrimaryGeneratedColumn()
  consulta_id: number;

  @ManyToOne(() => Tutor, (tutor) => tutor.consultas, { nullable: false })
    @JoinColumn({ name: 'tutor_id' })
    tutor: Tutor;

  @Column()
  tutor_id: number;

  @ManyToOne(() => Paciente, (paciente) => paciente.consultas, { nullable: false })
    @JoinColumn({ name: 'paciente_id' })
    paciente: Paciente;

  @Column()
  paciente_id: number;

@ManyToOne(() => Veterinario, (veterinario) => veterinario.consultas, { nullable: false })
    @JoinColumn({ name: 'vet_id' })
    veterinario: Veterinario;

  @Column()
  vet_id: number;

  @Column({})
  data_consulta: Date;

  @Column({ length: 5 })
  hora_consulta: string;

  @Column({ length: 20 })
  status: string;

  @CreateDateColumn({ type: "timestamp" })
    criado_em: Date;

  @OneToMany(() => Prontuario, (prontuario) => prontuario.consulta)
    prontuarios: Prontuario[];
}

export default Consulta;