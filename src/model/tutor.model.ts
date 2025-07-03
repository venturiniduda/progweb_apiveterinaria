import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

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

}

export default Tutor;
