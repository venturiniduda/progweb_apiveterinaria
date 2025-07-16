import { Request,Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../model/user.model";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

async function login(req: Request, res: Response) {
    const { username, password } = req.body;

    if (!username || !password){
        res.status(400).json({message: "Usuário e/ou senha obrigatórios!"});
        return;
    }

    const userRepostory = AppDataSource.getRepository(User);
    const user = await userRepostory.findOne({ where: {username}});

    if(!user){
        res.status(401).json({message: "Usuário e/ou senha inválidos."});
        return;
    }

    // Se chegar aqui, usuário existe, então devemos verificar senha
    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid){
        res.status(401).json({message: "Usuário e/ou senha inválidos."});
        return;
    }

    // Se chegar aqui, login feito. Vamos passar o token de acesso ao usuário
    const tokenJWT = jwt.sign(
        {userID: user.id, userName: user.username},
        String(process.env.JWT_KEY), // passando a key que será usada de padrão para criptografar
        { expiresIn: '1h'} // tempo que demora para expirar a chave de token
    )

    res.status(200).json({message: "Login realizado com sucesso!", token: tokenJWT});
}

export default{
    login
}