import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Admin {

  @PrimaryGeneratedColumn()
  admin_id: number;

  @Column({ length: 60 })
  nome: string;

  @Column({ length: 60 })
  sobrenome: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ length: 14 })
  cnpj: string;

  @Column({ length: 60 })
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

  @Column({ length: 60 })
  cargo: string;

  @Column()
  data_admissao: Date;

  @Column({ length: 60 })
  senha_hash: string;

  @CreateDateColumn({ type: "timestamp" })
  criado_em: Date;

}

// export default Admin;
