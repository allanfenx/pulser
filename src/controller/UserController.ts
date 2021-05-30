import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";
import bcrypt from "bcrypt";
import UserView from "../view/UserView";


class UserController {

    async index(request: Request, response: Response) {

        const users = await getRepository(User).find();

        return response.json(UserView.renderMany(users));
    }

    async store(request: Request, response: Response) {

        const { name, email, password } = request.body;

        //init validate
        const data = { name, email, password };

        const repository = getRepository(User);

        let user = await repository.findOne({ where: { email } });

        if (user) return response.status(401).json({ erro: "Já existe usario cadastrado com este email" });

        const hash = await bcrypt.hash(password, 10);

        user = repository.create({ name, email, password: hash });

        try {
            repository.save(user);

            return response.json(UserView.render(user));
        } catch (error) {

            return response.status(400).json({ erro: "Falha ao salvar usuario " });
        }
    }

    async show(request: Request, response: Response) {

        const { id } = request.params;

        const repository = getRepository(User);

        const user = await repository.findOne({ where: { id } })

        return response.json(UserView.render(user));
    }

    async delete(request: Request, response: Response) {

        const { id } = request.params;

        const repository = getRepository(User);

        const user = await repository.findOne({ where: { id } });

        if (!user) return response.status(404).json({ erro: "User not found" });

        try {

            await repository.remove(user);

            return response.json();
        } catch (error) {

            return response.status(400).json({ erro: "Falha ao deletar user" });
        }
    }
}

export default new UserController();