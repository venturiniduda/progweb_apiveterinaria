import { Request,Response, NextFunction } from "express";
import userRepostory from "../repositories/user.repository";

async function addUser(req: Request, res: Response, next: NextFunction) {
    /* #swagger.tags = ['Users']
       #swagger.description = 'Creates a new user.'
       #swagger.parameters['body'] = {
        in: 'body',
        description: 'User data to create.',
        required: true,
        schema: { $ref: "#/definitions/addUser" }
       },
       #swagger.responses[201] = {
            description: 'User created successfully.',
            schema: { $ref: "#/definitions/User" }
       }
    */
    const { username, password } = req.body;
    const user = await userRepostory.addUser(username,password);

    res.status(201).json(user);
}

export default {
    addUser
}