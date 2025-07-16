import { Request,Response } from "express";
import userRepostory from "../repositories/user.repository";

async function addUser(req: Request, res: Response) {
    const { username, password } = req.body;
    const user = await userRepostory.addUser(username,password);

    res.status(201).json(user);
}

export default {
    addUser
}
