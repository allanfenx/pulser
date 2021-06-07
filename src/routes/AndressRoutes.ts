import { Router } from "express";
import SingIn from "../config/SingIn";
import AndressController from "../controller/AndressController";


const router = Router();

router.post("/andress", SingIn, AndressController.store);

router.put("/andress/:id", SingIn, AndressController.update);

router.delete("/andress", SingIn, AndressController.destroy);

export default router;