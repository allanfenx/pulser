import { Router } from "express";
import CategoryController from "../controller/CategoryController";

const router = Router();

router.get("/categories", CategoryController.index);

router.get("/categories/:id", CategoryController.show);

router.post("/categories", CategoryController.store);

router.delete("/categories/:id", CategoryController.delete);

export default router;