import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";


class UserController {

    async index(request: Request, response: Response) {

        const users = await getRepository(User).find();

        return response.json({ users });
    }
}

export default new UserController();