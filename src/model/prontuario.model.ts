import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Consulta } from "./consulta.model";

@Entity()
export class Prontuario {
  @PrimaryGeneratedColumn()
  prontuario_id: number;

  @ManyToOne(() => Consulta, (consulta) => consulta.prontuarios, { nullable: false })
    @JoinColumn({ name: 'consulta_id' })
    consulta: Consulta;

  @Column()
  consulta_id: number;

  @Column({ length: 60 })
  tipo_atendimento: string;

  @Column({ length: 80 })
  queixa_principal: string;

  @Column({ length: 80 })
  historico_medico: string;

  @Column({ length: 80 })
  sistema_afetado: string;

  @Column({ length: 80 })
  detalhes_clinicos: string;

  @CreateDateColumn({ type: "datetime" })
    criado_em: Date;
}

export default Prontuario;