import { Router } from "express";
import ProductImgeController from "../controller/ProductImgeController";
import uploadConfig from "../config/UploadImage";
import multer from "multer";
import SingIn from "../config/SingIn";

const router = Router();

router.post("/products/images", SingIn, multer(uploadConfig).single("file"), ProductImgeController.store);

router.delete("/products/images/:id", SingIn, ProductImgeController.destroy);

export default router;