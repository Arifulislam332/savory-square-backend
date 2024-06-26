import cors from "cors";
import "dotenv/config";
import express, { Application, Request, Response } from "express";
import { connectCloudinary } from "./config/cloudinary.config";
import { connectDb } from "./config/db.config";
import myRestaurantRoute from "./routes/restaurant.route";
import myUserRoute from "./routes/user.route";
import publicRestaurantRoute from "./routes/restaurant.public.route";
import orderRoute from "./routes/order.router";

const app: Application = express();

app.use("/api/order/checkout/webhook", express.raw({ type: "*/*" }));
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.status(200).json({ message: "OK!" });
});

app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRoute);
app.use("/api/restaurant", publicRestaurantRoute);
app.use("/api/order", orderRoute);

connectDb();
connectCloudinary();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
