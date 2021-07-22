import { Request, Response } from "express";
import slugify from "slugify";
import { getRepository } from "typeorm";
import Category from "../models/Category";
import Product from "../models/Product";
import { ProductValidate } from "../validate/ProductValidate";
import ProductView from "../view/ProductView";


class ProductController {

    async index(request: Request, response: Response) {

        const products = await getRepository(Product).find({
            relations: ["category", "stocks", "images", "productWeigth"]
        });

        return response.json(ProductView.renderMany(products));
    }

    async store(request: Request, response: Response) {

        const { title, name, description, price, color, productWeigth } = request.body;


        /* const requestImages = request.files as Express.Multer.File[];
 
         const images = requestImages.map(image => {
 
             return { key_name: image.filename, name_image: image.originalname, color }
         });
 
         if (!images) return response.status(401).json({ erro: "Obrigatório pelo menos uma imagem" });
 
         if (images.length > 4) return response.status(401).json({ erro: "maximo 5 images por produto" });
         */
        //init validation
        let erros: string[] = [];

        ProductValidate(request.body, erros)

        if (erros.length > 0) return response.status(401).json({ erros });
        //end validation

        const category = await getRepository(Category).findOne({ where: { title } })

        if (!category) return response.status(404).json({ erro: "Category not found" });

        const repository = getRepository(Product);

        let product = await repository.findOne({ where: { name } });

        if (product) return response.status(401).json({ erro: "Product name já cadastrado" });

        product = repository.create({ name, description, price, slug: slugify(name), categoryId: category.id, productWeigth });

        try {

            await repository.save(product);

            return response.json({ product });
        } catch (error) {

            return response.status(400).json({ erro: "Falha ao cadastrar product" });
        }
    }

    async show(request: Request, response: Response) {

        const { id } = request.params;

        if (isNaN(Number(id))) return response.status(401).json({ erro: "Id invalid" });

        const product = await getRepository(Product).findOne(id);

        if (!product) return response.status(404).json({ erro: "Product not found" });

        return response.json(ProductView.render(product));
    }

    async destroy(request: Request, response: Response) {

        const { id } = request.params;

        if (isNaN(Number(id))) return response.status(404).json({ erro: "Id invalido" });

        const repository = getRepository(Product);

        const product = await repository.findOne(id);

        if (!product) return response.status(404).json({ erro: "Product not found" });

        try {
            await repository.remove(product);

            return response.json();
        } catch (error) {

            return response.status(400).json({ erro: "Fail delete product" });
        }
    }
}

export default new ProductController();