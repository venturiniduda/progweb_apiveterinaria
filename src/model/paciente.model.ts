import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import Tutor from './tutor.model';

export class Paciente {
  @PrimaryGeneratedColumn()
  animal_id: number;

  @ManyToOne(() => Tutor, (tutor) => tutor.Paciente, { nullable: false })
  @JoinColumn({ name: 'tutor_id' })
  tutor: Tutor;

  @Column()
  tutor_id: number;

  @Column()
  nome: string;

  @Column()
  sexo: string;

  @Column()
  raca: string;

  @Column()
  cor_pelagem: string;

  @Column()
  data_nascimento: Date;

  @CreateDateColumn({ type: "timestamp" })
    criado_em: Date;
}

export default Paciente;