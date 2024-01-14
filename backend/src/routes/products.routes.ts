import express, { Request, Response } from "express";
import multer from "multer";
import { v2 } from "cloudinary";
import { CategoryEnum, Product, ProductType } from "../models/products.model";
import verifyToken from "../middleware/auth.middleware";
import { check } from "express-validator";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, //5MB
});

router.post(
  "/",
  verifyToken,
  [
    check("name", "name is required").isString().notEmpty(),
    check("brand", "brand name is required").isString().notEmpty(),
    check("price", "price is required and must be a number")
      .isNumeric()
      .notEmpty(),
    check("category", "category is required")
      .isArray()
      .notEmpty()
      .isIn(CategoryEnum),
    check("description", "description is required").isString().notEmpty(),
    check("origin", "origin is required").isString().notEmpty(),
  ],
  upload.array("imageFiles", 6),
  async (req: Request, res: Response) => {
    try {
      const imageFiles = req.files as Express.Multer.File[];
      const newProduct: ProductType = req.body;

      // 1. Upload image
      const uploadPromises = imageFiles.map(async (image) => {
        const base64 = Buffer.from(image.buffer).toString("base64");
        let url = `data:${image.mimetype};base64,${base64}`;
        const res = await v2.uploader.upload(url);
        return res.url;
      });

      // 2. on success add the url in new product
      const imageUrls = await Promise.all(uploadPromises);
      newProduct.imageUrls = imageUrls;
      newProduct.userId = req.userId;

      // 3. Save the new product in DB
      const product = await Product.create(newProduct);

      // 4. return 201
      return res.status(201).send(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
      return;
    }
  }
);

export const productRouter = router;
