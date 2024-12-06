import { Router } from "express";
import { ContactController } from "../Controller/Contact";

const router=Router();

router.post("/",ContactController);

export default router;