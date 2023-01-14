const router = require("express").Router();

const {
  authenticateAdminPrivelageMiddleware,
} = require("../middleware/authenticateUserMiddleware");

const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
} = require("../controllers/productController");

// create product
router.post("/", authenticateAdminPrivelageMiddleware, createProduct);

// update product
router.put("/:id", authenticateAdminPrivelageMiddleware, updateProduct);

// delete product
router.delete("/:id", authenticateAdminPrivelageMiddleware, deleteProduct);

// get product
router.get("/:id", getProduct);

// get all products
router.get("/", getAllProducts);

module.exports = router;
