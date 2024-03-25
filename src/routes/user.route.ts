import express, { Router } from "express";
import { createCurruser } from "../controllers/user.controller";

const router: Router = express.Router();

router.post("/", createCurruser);

export default router;
