import { Router } from "express";
import SingIn from "../config/SingIn";
import CategoryController from "../controller/CategoryController";

const router = Router();

router.get("/categories", CategoryController.index);

router.get("/categories/:id", CategoryController.show);

router.post("/categories", SingIn, CategoryController.store);

router.put("/categories/:id", CategoryController.update);

router.delete("/categories/:id", SingIn, CategoryController.destroy);

export default router;