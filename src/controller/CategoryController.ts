import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Category from "../models/Category";

class CategoryController {

    async index(request: Request, response: Response) {

        const categories = await getRepository(Category).find();

        return response.json({ categories });

    }
}