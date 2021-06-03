import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Product from "../models/Product";


class ProductController {

    async index(request: Request, response: Response) {

        const products = await getRepository(Product).find();

        return response.json({ products });
    }
}