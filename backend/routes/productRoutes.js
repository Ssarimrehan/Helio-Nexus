const express = require("express");
const productController = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

// Public routes
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProduct);

// Admin routes
router.post(
  "/",
  adminMiddleware,
  upload.array("images", 5),
  productController.createProduct
);
router.put(
  "/:id",
  adminMiddleware,
  upload.array("images", 5),
  productController.updateProduct
);
router.delete("/:id", adminMiddleware, productController.deleteProduct);
router.delete(
  "/:id/image",
  adminMiddleware,
  productController.deleteProductImage
);

module.exports = router;
