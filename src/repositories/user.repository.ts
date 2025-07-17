import { AppDataSource } from "../data-source";
import { User }  from "../model/user.model";
import * as bcrypt from 'bcryptjs';

async function addUser(username: string, password: string) : Promise<User> {
    const repository = AppDataSource.getRepository(User);
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