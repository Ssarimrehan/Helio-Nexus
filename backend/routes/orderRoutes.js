const express = require("express");
const orderController = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

// Protected routes
router.post("/", authMiddleware, orderController.createOrder);
router.get("/", authMiddleware, orderController.getUserOrders);
router.get("/:id", authMiddleware, orderController.getOrder);

// Admin routes
router.get("/admin/all", adminMiddleware, orderController.getAllOrders);
router.put("/:id/status", adminMiddleware, orderController.updateOrderStatus);
router.get("/admin/stats", adminMiddleware, orderController.getOrderStats);

module.exports = router;
