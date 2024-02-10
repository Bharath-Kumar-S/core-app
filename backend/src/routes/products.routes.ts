import express, { Request, Response } from "express";
import multer from "multer";
import { v2 } from "cloudinary";
import { Enquiry, EnquiryType } from "../models/products.model";
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
  // verifyToken,
  [
    check("name", "name is required").isString().notEmpty(),
    // check("brand", "brand name is required").isString().notEmpty(),
    // check("price", "price is required and must be a number")
    //   .isString()
    //   .notEmpty(),
    // check("description", "description is required").isString().notEmpty(),
    // check("origin", "origin is required").isString().notEmpty(),
  ],
  upload.array("imageFiles", 6),
  async (req: Request, res: Response) => {
    try {
      const imageFiles = req.files as Express.Multer.File[];
      const newProduct: EnquiryType = req.body;

      // 1. Upload image
      const uploadPromises = imageFiles?.map(async (image) => {
        const base64 = Buffer.from(image.buffer).toString("base64");
        let url = `data:${image.mimetype};base64,${base64}`;
        const res = await v2.uploader.upload(url);
        return res.url;
      });

      // 2. on success add the url in new Enquiry
      const imageUrls = await Promise.all(uploadPromises);
      newProduct.imageUrls = imageUrls;
      // newProduct.userId = req.userId;

      // 3. Save the new Enquiry in DB
      const enquiry = await Enquiry.create(newProduct);

      // 4. return 201
      return res.status(201).send(enquiry);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
      return;
    }
  }
);

router.get("/", async (req: Request, res: Response) => {
  try {
    const products = await Enquiry.find();
    return res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
    return;
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    return enquiry
      ? res.status(200).send(enquiry)
      : res.status(404).send({ message: "Enquiry not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
    return;
  }
});

router.delete("/:id", verifyToken, async (req: Request, res: Response) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    return enquiry
      ? res.status(200).send(enquiry)
      : res.status(404).send({ message: "Enquiry not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
    return;
  }
});

router.put("/:id", verifyToken, async (req: Request, res: Response) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(enquiry);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
    return;
  }
});

router.get("/search/:name", async (req: Request, res: Response) => {
  try {
    const products = await Enquiry.find({
      name: { $regex: req.params.name, $options: "i" },
    });
    // check array is empty
    return products.length !== 0
      ? res.status(200).send(products)
      : res.status(404).send({ message: "Enquiry not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
    return;
  }
});

router.get("/category/:category", async (req: Request, res: Response) => {
  try {
    const products = await Enquiry.find({ category: req.params.category });
    return res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
    return;
  }
});

router.get("/brand/:brand", async (req: Request, res: Response) => {
  try {
    const products = await Enquiry.find({ brand: req.params.brand });
    return res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
    return;
  }
});

router.get("/price/:price", async (req: Request, res: Response) => {
  try {
    const products = await Enquiry.find({ price: req.params.price });
    return res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
    return;
  }
});

router.get("/origin/:origin", async (req: Request, res: Response) => {
  try {
    const products = await Enquiry.find({ origin: req.params.origin });
    return res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
    return;
  }
});

router.get("/user/:userId", async (req: Request, res: Response) => {
  try {
    const products = await Enquiry.find({ userId: req.params.userId });
    return products.length !== 0
      ? res.status(200).send(products)
      : res.status(404).send({ message: "Enquiry not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
    return;
  }
});

export const productRouter = router;
