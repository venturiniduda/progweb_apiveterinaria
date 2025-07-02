import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Paciente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    name: string;

    constructor(code: string, name: string) {
        this.code = code;
        this.name = name;
    }
}

export default Paciente;