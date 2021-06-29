import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import User from "../models/User";
import bcrypt from "bcrypt";
import UserView from "../view/UserView";
import { UserValidate } from "../validate/UserValidate";

class AuthController {

    async auth(request: Request, response: Response) {

        const { email, password } = request.body;

        const user = await getRepository(User).findOne({ where: { email } });

        if (!user) return response.status(401).json({ erro: "Credentials invalid" });

        const enviroment = String(process.env.SECRET)

        if (!await bcrypt.compare(password, user.password)) return response.status(401).json({ erro: "Credentials invalid" });

        const token = jwt.sign({ id: user.id, name: user.name, email: user.email, role: user.role }, enviroment, {
            expiresIn: 60000
        });

        user.password = "";

        return response.json({ user, token });
    }

    async register(request: Request, response: Response) {

        const { cpf, name, email, password } = request.body;

        //init validate
        let erros: string[] = [];

        UserValidate(request.body, erros);

        if (erros.length > 0) return response.status(401).json({ erro: erros });
        //end validação

        const repository = getRepository(User);

        let user = await repository.findOne({ where: [{ cpf }, { email }] });

        if (user) return response.status(401).json({ erro: "Já existe usario cadastrado com este email ou cpf" });

        const hash = await bcrypt.hash(password, 10);

        user = repository.create({ cpf, name, email, password: hash, role: "client" });

        try {
            await repository.save(user);

            user.password = "";

            return response.json({ user });
        } catch (error) {

            return response.status(400).json({ erro: "Falha ao salvar usuario " });
        }
    }


}

export default new AuthController();