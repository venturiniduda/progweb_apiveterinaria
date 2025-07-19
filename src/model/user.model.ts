// Usuário de acesso a API - Autenticação
import { hash } from "bcrypt";
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";

@Entity()
export class Usuarios{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hasPassword(){
        this.password = await hash(this.password, 10);
    }
}