import express, { Router } from "express";
import { jwtCheck, jwtParse } from "../middlewares/auth.middleware";
import {
  createCheckoutSession,
  getMyOder,
  stripeWebhookControllers,
} from "../controllers/order.controller";

const router: Router = express.Router();

router.post("/", jwtCheck, jwtParse, getMyOder);
router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParse,
  createCheckoutSession
);

router.post("/checkout/webhook", stripeWebhookControllers);

export default router;
