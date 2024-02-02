import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { usersRouter } from "./routes/users.routes";
import { authRouter } from "./routes/auth.routes";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { productRouter } from "./routes/products.routes";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
    origin:
      process.env.ENV === "PROD" ? /onrender\.com$/ : process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/products", productRouter);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "test api" });
});

app.listen(PORT, () => {
  console.log(
    `⚡️⚡️⚡️[server]: Server is running at https://localhost:${PORT} ⚡️⚡️⚡️`
  );
});
