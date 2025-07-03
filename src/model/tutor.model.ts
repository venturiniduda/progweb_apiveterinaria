import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from "typeorm";
import Paciente from './paciente.model';

@Entity()
class Tutor {

  @PrimaryGeneratedColumn()
  tutor_id: number;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column()
  cpf: string;

  @Column()
  data_nascimento: Date;

  @Column()
  rua: string;

  @Column()
  numero: number;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  complemento: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @CreateDateColumn({ type: "timestamp" })
  criado_em: Date;
  Paciente: any;

  @OneToMany(() => Paciente, (paciente) => paciente.tutor)
  pacientes: Paciente[];
}

export default Tutor;