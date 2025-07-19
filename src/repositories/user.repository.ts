import { AppDataSource } from "../data-source";
import { Usuarios }  from "../model/user.model";

async function addUser(username: string, password: string) : Promise<Usuarios> {
    const repository = AppDataSource.getRepository(Usuarios);
    const user = repository.create({
        "username": username,
        "password": password
    });
    
    return await repository.save(user);
}

export default {
    addUser
}