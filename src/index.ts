import express, { Application, Request, Response } from "express";
import cors from "cors";

import "dotenv/config";
import { connectDb } from "./config/db.config";

const app: Application = express();

app.use(express.json());
app.use(cors());

connectDb();

app.listen(8080, () => {
  console.log("Server is running on port:8080");
});
