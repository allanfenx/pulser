import { Router } from "express";
import SingIn from "../config/SingIn";
import ProductController from "../controller/ProductController";

const router = Router();

router.get("/products", ProductController.index);

router.get("/products/:id", ProductController.show);

router.post("/products", SingIn, ProductController.store);

router.delete("/products/:id", SingIn, ProductController.destroy);

export default router;