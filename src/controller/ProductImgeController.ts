import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Unlink from "../config/Unlink";
import Product from "../models/Product";
import ProductImage from "../models/ProductImage";

class ProductImageController {

    async store(request: Request, response: Response) {

        const { name, color } = request.body;

        const { filename: key_name, originalname: name_image, size } = request.file;

        if (!name || name !== String(name)) {
            Unlink(key_name);
            return response.status(401).json({ erro: "O campo name é obrigatório" });
        }

        if (!color || color !== String(color)) {
            Unlink(key_name);
            return response.status(401).json({ erro: "Colo invalid" });
        }

        const product = await getRepository(Product).findOne({ where: { name } });

        if (!product) {
            Unlink(key_name);
            return response.status(404).json({ erro: "Product not found" });
        }

        const repository = getRepository(ProductImage);

        const image = repository.create({ key_name, name_image, color, productId: product.id });

        try {

            await repository.save(image);

            return response.json({ image });
        } catch (error) {

            return response.status(400).json({ erro: "Fail save image" });
        }
    }

    async destroy(request: Request, response: Response) {

        const { id } = request.params;

        const { index } = request.body;

        const product = await getRepository(Product).findOne(id);

        if (!product) return response.status(404).json({ erro: "Product not found" });

        const repository = getRepository(ProductImage);

        const images = await repository.find({ where: { productId: product.id } });

        if (images.length < 2) return response.status(401).json({ erro: "Não é permitido deletar todas imagens" });

        try {

            await repository.remove(images[index]);

            Unlink(String(images[index].key_name));

            return response.json();
        } catch (error) {

            return response.status(400).json({ erro: "Fail deletar image " });
        }
    }

    async delete(request: Request, response: Response) {

        const { name, index } = request.body;

        console.log(request.body);

        return
    }
}

export default new ProductImageController();