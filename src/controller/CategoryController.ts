import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Category from "../models/Category";
import slugify from "slugify";

class CategoryController {

    async index(request: Request, response: Response) {

        const categories = await getRepository(Category).find();

        return response.json({ categories });

    }

    async store(request: Request, response: Response) {

        const { title } = request.body;

        if (!title || typeof title == undefined || title == null) return response.status(404).json({ erro: "O titulo é obrigatório" });

        const repository = getRepository(Category);

        let category = await repository.findOne({ where: { title } });

        if (category) return response.status(401).json({ erro: "Esse titulo já existe!" });

        category = repository.create({ title, slug: slugify(title) });

        try {
            await repository.save(category);

            return response.json({ category });

        } catch (error) {

            return response.status(400).json({ erro: "Falha ao salvar categoria" });
        }
    }

    async show(request: Request, response: Response) {

        const { id } = request.params;

        if (!id.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i))
            return response.status(404).json({ erro: "Id invalido" });

        const category = await getRepository(Category).findOne({ where: { id } });

        if (!category) return response.status(404).json({ erro: "Categoria não encontrada" });

        return response.json({ category });
    }

    async delete(request: Request, response: Response) {

        const { id } = request.params;

        if (!id.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i))
            return response.status(404).json({ erro: "Id invalido" });

        const repository = getRepository(Category);

        const category = await repository.findOne(id);

        if (!category) return response.status(404).json({ erro: "Categoria não encontrada" });

        try {
            await repository.remove(category);

            return response.json();
        } catch (error) {

            return response.status(400).json({ erro: "Falha ao deletar categoria" });
        }
    }
}

export default new CategoryController();