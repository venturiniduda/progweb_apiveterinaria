import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";

export const apiKeyAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey || typeof apiKey !== 'string'){
        res.status(401).json({message: "Não autorizado!"});
        return;
    }

    if (apiKey != process.env.API_KEY){
        res.status(401).json({message: "Não autorizado!"});
        return;
    }

    // Se tudo der certo: segue o fluxo
    next();
}

export const jwtAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Teremos algo como -> Autorization: Beare <token>

    const authHeader = req.headers.authorization;

    if (!authHeader){
        res.status(401).json({message: "Não autorizado!"});
        return;
    }

    // Se estiver preenchido, fazemos um split para pegar a parte que contem o token
    const type = authHeader.split(' ')[0];
    const token = authHeader.split(' ')[1];
    
    // Para testar:
    // console.log(type);
    // console.log(token);

    if (!type || !token){
        res.status(401).json({message: "Não autorizado!"});
        return;
    }

    try{
        // Se estiver preenchido, checamos o token recebido
        const decodedPayload = jwt.verify(token, String(process.env.JWT_KEY));

        //TODO: Save decodedPayload  in req.

    }catch(error){
        res.status(401).json({message: "Token inválido!"});
        return;
    }
    
    // Se tudo der certo: segue o fluxo
    next();
}