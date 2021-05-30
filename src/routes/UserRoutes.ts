import { Router } from "express";
import UserController from "../controller/UserController";

const router = Router();

router.get("/users", UserController.index);

router.get("/users/:id", UserController.show);

router.post("/users", UserController.store);

router.delete("/users/:id", UserController.delete);

export default router;