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
}

export default Paciente;