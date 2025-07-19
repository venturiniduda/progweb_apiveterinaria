import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Usuarios } from "../model/user.model";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

async function login(req: Request, res: Response, next: Function) {
    /*  #swagger.tags = ['Auth']
        #swagger.description = 'Realiza login do usuário e retorna um token JWT.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Credenciais de login.',
            required: true,
            schema: {
                type: 'object',
                properties: {
                    username: { type: 'string' },
                    password: { type: 'string' }
                },
                required: ['username', 'password']
            }
        }
        #swagger.responses[200] = {
            description: 'Login realizado com sucesso.',
            schema: {
                type: 'object',
                properties: {
                    message: { type: 'string' },
                    token: { type: 'string' }
                }
            }
        }
        #swagger.responses[400] = {
            description: 'Usuário e/ou senha não informados.'
        }
        #swagger.responses[401] = {
            description: 'Usuário e/ou senha inválidos.'
        }
        #swagger.responses[500] = {
            description: 'Erro interno no servidor.'
        }
    */
    const { username, password } = req.body;

    if (!username || !password){
        res.status(400).json({message: "Usuário e/ou senha obrigatórios!"});
        return;
    }

    const userRepository = AppDataSource.getRepository(Usuarios);
    const user = await userRepository.findOne({ where: { username } });

    if (!user){
        res.status(401).json({message: "Usuário e/ou senha inválidos."});
        return;
    }

    console.log("senha recebida", password);
    console.log("senha bd", user.password);

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid){
        // res.status(401).json({message: "Usuário e/ou senha inválidos."});
        res.status(401).json({message: "Senha inválidos."});
        return;
    }

    if (!process.env.JWT_KEY) {
        res.status(500).json({ message: "Erro no servidor. Tente novamente mais tarde." });
        return;
    }

    const tokenJWT = jwt.sign(
        { userID: user.id, userName: user.username },
        String(process.env.JWT_KEY),
        { expiresIn: '1h' }
    );

    res.status(200).json({ message: "Login realizado com sucesso!", token: tokenJWT });
}

export default {
    login
}
