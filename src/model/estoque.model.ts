import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, JoinColumn } from 'typeorm';
import { Medicamento } from "./medicamento.model";

@Entity()
export class Estoque {
  @PrimaryGeneratedColumn()
  estoque_id: number;

  @OneToMany(() => Medicamento, (medicamento) => medicamento.estoque, { nullable: false })
  @JoinColumn({ name: 'med_id' })
  medicamento: Medicamento;

  @Column()
  med_id: number;

  @Column()
  lote: number;

  @Column()
  validade: Date;

  @Column()
  quantidade_atual: number;

  @Column()
  quantidade_minima: number;

  @Column({ length: 20 })
  localizacao: string;

  @CreateDateColumn({ type: "timestamp" })
  criado_em: Date;
}

export default Estoque;