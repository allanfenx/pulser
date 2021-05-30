import { Router } from "express";
import AuthController from "../controller/AuthController";

const router = Router();

router.post("/auth", AuthController.auth);

router.post("/register", AuthController.register);

export default router;