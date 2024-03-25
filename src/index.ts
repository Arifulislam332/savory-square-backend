import express, { Application } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDb } from "./config/db.config";
import myUserRoute from "./routes/user.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);

connectDb();

app.listen(8080, () => {
  console.log("Server is running on port:8080");
});
