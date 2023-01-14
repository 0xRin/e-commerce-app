const router = require("express").Router();
const {
  authenticateRoleMiddleware,
  authenticateAdminPrivelageMiddleware,
} = require("../middleware/authenticateUserMiddleware");
const {
  updateUserProfile,
  deleteUserProfile,
} = require("../controllers/userController");

//  update user
router.put("/:id", authenticateRoleMiddleware, updateUserProfile);

// delete user
router.delete("/:id", authenticateAdminPrivelageMiddleware, deleteUserProfile);
module.exports = router;
