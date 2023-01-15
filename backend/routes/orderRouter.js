const router = require("express").Router();

const {
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  getAllUserOrders,
  getMonthlyIncome,
} = require("../controllers/orderController");
const {
  authenticateUserMiddleware,
  authenticateAdminPrivelageMiddleware,
  authenticateRoleMiddleware,
} = require("../middleware/authenticateUserMiddleware");

// create order
router.post("/", authenticateUserMiddleware, createOrder);

// update order
router.put("/:id", authenticateAdminPrivelageMiddleware, updateOrder);

// delete order
router.delete("/:id", authenticateAdminPrivelageMiddleware, deleteOrder);

// get monthly income
router.get("/income", authenticateAdminPrivelageMiddleware, getMonthlyIncome);

// get order
router.get("/:id", authenticateUserMiddleware, getOrder);

// get all
router.get("/all", authenticateAdminPrivelageMiddleware, getAllUserOrders);

module.exports = router;
