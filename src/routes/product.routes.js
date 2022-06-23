import { Router } from "express";
const router = Router();
import {
  renderProducts,
  addProducts,
  editProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controllers.js";

router.get("/", renderProducts);

router.post("/products/add", addProducts);

router.get("/edit/:id", editProduct);

router.post("/edit/:id", updateProduct);

router.get("/delete/:id", deleteProduct);

export default router;
