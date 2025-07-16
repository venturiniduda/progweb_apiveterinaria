import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Receita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  descricao: string;

  @Column("decimal", { precision: 10, scale: 2 })
  valor: number;

  @CreateDateColumn()
  data: Date;
}

export default Receita;
