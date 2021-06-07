import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Category from "../models/Category";
import slugify from "slugify";
import CategoryView from "../view/CategoryView";

class CategoryController {

    async index(request: Request, response: Response) {

        const categories = await getRepository(Category).find();

        return response.json(CategoryView.renderMany(categories));

    }

    async store(request: Request, response: Response) {

        const { title } = request.body;

        if (!title || typeof title == undefined || title == null) return response.status(404).json({ erro: "O titulo é obrigatório" });

        if (title.length > 49) return response.status(401).json({ erro: "O campo titulo nã pode ter mais que 50 caractres" });

        const repository = getRepository(Category);

        let category = await repository.findOne({ where: { title } });

        if (category) return response.status(401).json({ erro: "Esse titulo já existe!" });

        category = repository.create({ title, slug: slugify(title) });

        try {
            await repository.save(category);

            return response.json(CategoryView.render(category));

        } catch (error) {

            return response.status(400).json({ erro: "Falha ao salvar categoria" });
        }
    }

    async show(request: Request, response: Response) {

        const { id } = request.params;

        if (isNaN(Number(id))) return response.status(404).json({ erro: "Id invalido" });

        const category = await getRepository(Category).findOne({ where: { id } });

        if (!category) return response.status(404).json({ erro: "Categoria não encontrada" });

        return response.json(CategoryView.render(category));
    }

    async update(request: Request, response: Response) {

        const { id } = request.params;

        if (isNaN(Number(id))) return response.status(404).json({ erro: "Id invalido" });

        const { title } = request.body;

        if (!title || title == null || typeof title == undefined) return response.status(401).json({ erro: "O campo titulo é obrigatório" });

        if (title.length > 49) return response.status(401).json({ erro: "O campo titulo nã pode ter mais que 50 caractres" });

        const repository = getRepository(Category);

        const category = await repository.findOne(id);

        if (!category) return response.status(404).json({ erro: "Category not found" });

        try {

            await repository.update(id, { title, slug: slugify(title) });

            return response.json({ category: title });
        } catch (error) {

            return response.status(400).json({ erro: "Falha ao atualizar categoria" });
        }
    }

    async destroy(request: Request, response: Response) {

        const { id } = request.params;

        if (isNaN(Number(id))) return response.status(404).json({ erro: "Id invalido" });

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