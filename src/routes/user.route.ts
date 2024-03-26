import express, { Router } from "express";
import { createCurrUser, updateCurrUser } from "../controllers/user.controller";
import { jwtCheck, jwtParse } from "../middlewares/auth.middleware";
import { validateMyUserRequest } from "../dto/user.dto";

const router: Router = express.Router();

router.post("/", jwtCheck, createCurrUser);
router.put("/", jwtCheck, jwtParse, validateMyUserRequest, updateCurrUser);

export default router;
