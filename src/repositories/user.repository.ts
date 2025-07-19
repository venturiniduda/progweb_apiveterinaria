import { AppDataSource } from "../data-source";
import { Usuarios }  from "../model/user.model";
import * as bcrypt from 'bcryptjs';

async function addUser(username: string, password: string) : Promise<Usuarios> {
    const repository = AppDataSource.getRepository(Usuarios);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = repository.create({
        "username": username,
        "password": hashedPassword
    });
    
    return await repository.save(user);
}

export default {
    addUser
}