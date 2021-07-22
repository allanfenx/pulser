import { Router } from "express";
import multer from "multer";
import SingIn from "../config/SingIn";
import ProductController from "../controller/ProductController";
import uploadConfig from "../config/UploadImage";

const router = Router();

router.get("/products", ProductController.index);

router.get("/products/:id", ProductController.show);

router.post("/products", SingIn, multer(uploadConfig).array("images"), ProductController.store);

router.delete("/products/:id", SingIn, ProductController.destroy);

export default router;