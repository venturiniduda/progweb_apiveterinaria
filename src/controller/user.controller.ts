import { Request,Response, NextFunction } from "express";
import userRepostory from "../repositories/user.repository";

async function addUser(req: Request, res: Response, next: NextFunction) {
    /* #swagger.tags = ['Users']
       #swagger.description = 'Criar um novo usuário.'
       #swagger.parameters['body'] = {
        in: 'body',
        description: 'Informações do novo usuário.',
        required: true,
        schema: { $ref: "#/definitions/addUser" }
       },
       #swagger.responses[201] = {
            description: 'Usuário criado com sucesso!',
            schema: { $ref: "#/definitions/User" }
       }
    */
    const { username, password } = req.body;
    const user = await userRepostory.addUser(username,password);

    res.status(201).json({ message: "Usuário criado com sucesso!", user: user });
}

export default {
    addUser
}