const {
  getCart,
  createCart,
  updateCart,
  deleteCart,
  getAllUserCarts,
} = require("../controllers/cartController");
const {
  authenticateUserMiddleware,
  authenticateAdminPrivelageMiddleware,
} = require("../middleware/authenticateUserMiddleware");

const router = require("express").Router();

// create cart
router.post("/", authenticateUserMiddleware, createCart);

// update cart
router.put("/", authenticateUserMiddleware, updateCart);

// delete cart
router.delete("/", authenticateUserMiddleware, deleteCart);

// get cart
router.get("/", authenticateUserMiddleware, getCart);

// get all
router.get("/all", authenticateAdminPrivelageMiddleware, getAllUserCarts);

module.exports = router;
