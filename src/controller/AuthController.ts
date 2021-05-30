import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import User from "../models/User";
import bcrypt from "bcrypt";
import UserView from "../view/UserView";

class AuthController {

    async auth(request: Request, response: Response) {

        const { email, password } = request.body;

        const user = await getRepository(User).findOne({ where: { email } });

        if (!user) return response.status(401).json({ erro: "Credentials invalid" });

        if (!await bcrypt.compare(password, user.password)) return response.status(401).json({ erro: "Credentials invalid" });

        const token = jwt.sign({ id: user.id, name: user.name, email: user.email, role: user.role }, 'vanish', {
            expiresIn: 60000
        });

        return response.json({ user, token });
    }

    async register(request: Request, response: Response) {

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


}

export default new AuthController();