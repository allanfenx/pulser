import { Router } from "express";
import UserController from "../controller/UserController";

const router = Router();

router.get("/users", UserController.index);

router.post("/users", UserController.store);

export default router;