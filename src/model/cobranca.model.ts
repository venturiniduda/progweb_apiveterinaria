import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Cobranca {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cliente: string;

  @Column("decimal", { precision: 10, scale: 2 })
  valor: number;

  @Column({ default: "pendente" })
  status: string;

  @CreateDateColumn()
  dataCriacao: Date;
}

export default Cobranca;
