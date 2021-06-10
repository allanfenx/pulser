import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Product from "../models/Product";
import ProductStock from "../models/ProductStock";
import { ProductStockValidate, ProductStockValidateUpdate } from "../validate/ProductStockValidate";


class ProductStockController {

    async store(request: Request, response: Response) {

        const { name, amount, color } = request.body;

        //init validation
        let erros: string[] = [];

        ProductStockValidate(request.body, erros);

        if (erros.length > 0) return response.status(401).json({ erros });

        const product = await getRepository(Product).findOne({ where: { name } });

        if (!product) return response.json({ erro: "Product not found" });

        const repository = getRepository(ProductStock);

        const stock = repository.create({ amount, color, productId: product.id });

        try {

            await repository.save(stock);

            return response.json({ stock });
        } catch (error) {

            return response.status(400).json({ erro: "falha ao cadastrar estoque" });
        }
    }

    async update(request: Request, response: Response) {

        const { id } = request.params;

        if (isNaN(Number(id))) return response.status(401).json({ erro: "Id invalid" })

        const product = await getRepository(Product).findOne(id);

        if (!product) return response.status(404).json({ erro: "Product not found" });

        const { amount, color, index } = request.body;

        //init validation
        let erros: string[] = [];

        ProductStockValidateUpdate(request.body, erros);

        if (erros.length > 0) return response.status(401).json({ erros });
        //end validation

        const repository = getRepository(ProductStock);

        const stocks = await repository.find({ where: { productId: product.id } });

        if (!stocks[index].id) return response.status(404).json({ erro: "Stock product not found" });

        try {

            await repository.update(stocks[index].id, { amount, color, productId: product.id });

            return response.json({ stock: color, amount });
        } catch (error) {

            return response.status(400).json({ erro: "Fail update stock product" });
        }
    }

    async destroy(request: Request, response: Response) {

        const { name, index } = request.body;

        if (!name) return response.status(401).json({ erro: "Name invalid" });

        const product = await getRepository(Product).findOne({ where: { name } });

        if (!product) return response.status(404).json({ erro: "Product not found" });

        if (!index || index !== Number(index)) {
            return response.status(404).json({ erro: "Index invalid" });
        }
        const repository = getRepository(ProductStock);

        const stocks = await repository.find({ where: { productId: product.id } });

        if (!stocks[index]) return response.status(404).json({ erro: "Stock not found" });

        if (stocks.length < 2) return response.status(401).json({ erro: "It is not allowed to delete all stock" });

        try {

            await repository.remove(stocks[index]);

            return response.json();
        } catch (error) {

            return response.status(400).json({ erro: "Fail ao deletar stock " });
        }
    }
}

export default new ProductStockController();