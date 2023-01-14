const router = require("express").Router();
const {
  authenticateRoleMiddleware,
  authenticateAdminPrivelageMiddleware,
} = require("../middleware/authenticateUserMiddleware");
const {
  updateUserProfile,
  deleteUserProfile,
  getUserProfile,
  getAllUsers,
  getStats,
} = require("../controllers/userController");

//  update user
router.put("/:id", authenticateRoleMiddleware, updateUserProfile);

// delete user
router.delete("/:id", authenticateAdminPrivelageMiddleware, deleteUserProfile);

// get user profile
router.get("find/:id", authenticateAdminPrivelageMiddleware, getUserProfile);

// get all users
router.get("/", authenticateAdminPrivelageMiddleware, getAllUsers);

// get user stats
router.get("/stats", authenticateAdminPrivelageMiddleware, getStats);

module.exports = router;
