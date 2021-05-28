import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";
import UserValidate from "../validate/UserValidate";


class UserController {

    async index(request: Request, response: Response) {

        const users = await getRepository(User).find();

        return response.json({ users });
    }

    async store(request: Request, response: Response) {

        const { name, email, password } = request.body;

        //init validate
        let erros: any[] = [];

        const data = { name, email, password };

        if (erros.length > 0) return response.status(401).json({ erro: UserValidate.validUser(data, erros) });

        const repository = getRepository(User);

        let user = await repository.findOne({ where: { email } });

        if (user) return response.status(401).json({ erro: "Já existe usario cadastrado com este email" });

        user = repository.create({ name, email, password });

        try {
            repository.save(user);

            user.password = "";

            return response.json({ user });
        } catch (error) {

            return response.status(400).json({ erro: "Falha ao salvar usuario" });
        }
    }
}

export default new UserController();