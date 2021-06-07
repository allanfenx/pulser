import { Router } from "express";
import SingIn from "../config/SingIn";
import UserController from "../controller/UserController";


const router = Router();

router.get("/users", SingIn, UserController.index);

router.get("/users/:id", SingIn, UserController.show);

router.post("/users", SingIn, UserController.store);

router.delete("/users/:id", SingIn, UserController.destroy);

export default router;