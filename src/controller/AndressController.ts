import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Andress from "../models/Andress";
import { AndressValidate } from "../validate/AndressValidate";
import AndressView from "../view/AndressView";

export default new class AndressController {

    async store(request: Request, response: Response) {

        const { userID, email } = request;

        const { cep, street, district, city, state, number } = request.body;

        //init validation
        let erros: string[] = [];

        AndressValidate(request.body, erros)

        if (erros.length > 0) return response.status(401).json({ erro: erros });
        //end validation

        const repository = getRepository(Andress);

        let andressFind = await repository.find({ where: { userId: userID } });

        if (andressFind.length > 3) return response.status(401).json({ erro: "Somente quatro endereço por usuario" });

        const andress = repository.create({ cep, street, district, city, state, number, userId: userID });

        try {

            await repository.save(andress);

            return response.json(AndressView.render(andress));
        } catch (error) {

            return response.status(400).json({ erro: "Falha ao cadastrar endereço" });
        }
    }

    async update(request: Request, response: Response) {

        const { userID } = request;

        const { id } = request.params;

        if (!isNaN(Number(id))) return response.status(404).json({ erro: "Id invalido" });

        const { cep, street, district, city, state, number, code, } = request.body;

        //init validation
        let erros: string[] = [];

        AndressValidate(request.body, erros);

        if (erros.length > 0) return response.status(401).json({ erros });
        //end validation

        const repository = getRepository(Andress);

        const andresses = await repository.find({ where: { userId: userID } });

        const andress = andresses.map(item => { return item.userId });

        if (!andress.includes(code)) return response.status(401).json({ erro: "Serious danger violation" });

        try {

            await repository.update({ id }, { cep, street, district, city, state, number });

            return response.json({ andres: street, district, city, state, number });
        } catch (error) {

            return response.status(400).json({ erro: "Falha ao atualizar endereço" });
        }
    }

    async destroy(request: Request, response: Response) {

        const { userID } = request;

        const { index } = request.body;

        const repository = getRepository(Andress);

        const andress = await repository.find({ where: { userId: userID } });

        if (andress.length < 1) return response.status(401).json({ erro: "Usuario precisa ter pelo menos um endereço cadastrado" });

        try {

            await repository.remove(andress[index]);

            return response.json();
        } catch (error) {

            return response.status(400).json({ erro: "Falha ao deletar endereço" });
        }
    }

}