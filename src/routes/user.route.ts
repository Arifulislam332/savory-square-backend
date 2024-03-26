import express, { Router } from "express";
import { createCurruser } from "../controllers/user.controller";
import { jwtCheck } from "../middlewares/auth.middleware";

const router: Router = express.Router();

router.post("/", jwtCheck, createCurruser);

export default router;
