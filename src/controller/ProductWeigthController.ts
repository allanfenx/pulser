import { Request, Response } from "express";
import { getRepository } from "typeorm";
import ProductWeigth from "../models/ProductWeigth";

class ProductWeigthController {

    async index(request: Request, response: Response) {

        const weigths = await getRepository(ProductWeigth).find();

        return response.json({ weigths });
    }

    async store({ mesuare, measures, weigth, weigths }: ProductWeigth) {

        const repository = getRepository(ProductWeigth);

        const productWweigth = repository.create({ mesuare, measures, weigth, weigths });

        try {

            await repository.save(productWweigth);

            return;
        } catch (error) {

            return new Error("Falha ao salvar peso produto");
        }
    }
}

export default new ProductWeigthController();