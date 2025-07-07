import { Request, Response, NextFunction } from "express"

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