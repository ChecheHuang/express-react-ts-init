import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import apiRouter from "./routes/api";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

const port = process.env.PORT;

app.use("/api", apiRouter);

app.get("/*", function(req: Request, res: Response) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.listen(port, () => {
  console.log(`⚡️我跑在http://localhost:${port}`);
});
