import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import advertisingRouter from "./router/advertising.router";
import { apiParths } from "./interface/apiPaths.interface";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const apiParhs: apiParths = { advertising: "/api/advertising" };

app.use(express.json());
app.use(cors());

app.use(apiParhs.advertising, advertisingRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to API Bloom", version: "1.0.0" });
});

app.listen(port, () => {
  console.log(`⚡️Servidor inicializado en el puerto ${port}`);
});
