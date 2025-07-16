import { PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Estoque } from "./estoque.model";
export class Medicamento {
  @PrimaryGeneratedColumn()
  med_id: number;

  @Column({ length: 60 })
  nome: string;

  @Column({ length: 60 })
  principio_ativo: string;

  @Column({ length: 30 })
  codigo_registro: string;

  @Column({ length: 60 })
  categoria: string;

  @Column({ length: 20 })
  posologia: string;

  @Column({ length: 20 })
  via_administracao: string;

  @Column({ length: 60 })
  fabricante: string;

  @Column({ length: 80 })
  codigo_barras: string;

  @Column()
  preco_unitario: number;

  @Column({ length: 1 })
  prescricao_obrigatoria: string;

  @CreateDateColumn({ type: "timestamp" })
    criado_em: Date;

  @ManyToOne(() => Estoque, (estoque) => estoque.medicamento)
  medicamentos: Medicamento[];
  Estoque: any;
}

export default Medicamento;