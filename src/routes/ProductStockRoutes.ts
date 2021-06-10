import { Router } from "express";
import ProductStockController from "../controller/ProductStockController";

const router = Router();

router.post("/stocks", ProductStockController.store);

router.put("/stocks/:id", ProductStockController.update);

router.delete("/stocks", ProductStockController.destroy);

export default router;