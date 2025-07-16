import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Notificacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mensagem: string;

  @Column()
  tipo: string;

  @CreateDateColumn()
  dataEnvio: Date;
}

export default Notificacao;
