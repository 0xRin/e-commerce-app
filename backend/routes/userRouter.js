const router = require("express").Router();
const {
  authenticateRoleMiddleware,
} = require("../middleware/authenticateUserMiddleware");
const { updateUserProfile } = require("../controllers/userController");

router.put("/:id", authenticateRoleMiddleware, updateUserProfile);

module.exports = router;
