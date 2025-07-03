import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from "typeorm";
import Paciente from './paciente.model';

@Entity()
class Tutor {

  @PrimaryGeneratedColumn()
  tutor_id: number;

  @Column({ length: 60 })
  nome: string;

  @Column({ length: 60 })
  sobrenome: string;

  @Column({ length: 11 })
  cpf: string;

  @Column()
  data_nascimento: Date;

  @Column({ length: 60})
  rua: string;

  @Column()
  numero: number;

  @Column({ length: 30 })
  bairro: string;

  @Column({ length: 30 })
  cidade: string;

  @Column({ length: 30 })
  complemento: string;

  @Column({ length: 30 })
  email: string;

  @Column({ length: 11 })
  telefone: string;

  @CreateDateColumn({ type: "timestamp" })
  criado_em: Date;
  Paciente: any;

  @OneToMany(() => Paciente, (paciente) => paciente.tutor)
  pacientes: Paciente[];
}

export default Tutor;