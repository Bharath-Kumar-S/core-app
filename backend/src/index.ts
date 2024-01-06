import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { usersRouter } from "./routes/users.routes";
import { authRouter } from "./routes/auth.routes";

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.DB_URL as string);
const db = mongoose.connection;
db.on("error", (err) => {
  console.error(err);
});
db.on("open", () => console.log("Connected to DB!!!!"));

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "test api" });
});

app.listen(PORT, () => {
  console.log(
    `⚡️⚡️⚡️[server]: Server is running at https://localhost:${PORT} ⚡️⚡️⚡️`
  );
});
