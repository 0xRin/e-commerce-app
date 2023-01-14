const encryptPassword = require("../util/encryptPassword");
const User = require("../models/UserModel");
const NotFoundError = require("../errors/NotFoundError");
const {
  authenticateAdminPrivelageMiddleware,
} = require("../middleware/authenticateUserMiddleware");

// update user profile
const updateUserProfile = async (req, res) => {
  const { password } = req.body;

  const user = await User.findById(req.params.id);
  if (!user) throw new NotFoundError("User not found");

  let encryptedPassword;

  if (password) {
    encryptedPassword = encryptPassword(password);
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    {
      password: encryptedPassword,
      ...req.body,
    },
    { new: true }
  );

  // bug: if user updates profile, access token issued before is stale

  res.status(200).json({ message: updatedUser });
};

// delete user profile
const deleteUserProfile = async (req, res) => {
  const { id } = req.params;

  const deletedUser = await User.findByIdAndDelete(id);
  if (!deletedUser) throw new NotFoundError("User does not exist");

  res
    .status(200)
    .json({ message: `${deletedUser.username}'s profile has been deleted` });
};

// get user
const getUserProfile = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);
  if (!user) throw new NotFoundError(`User  not found`);
  const { password, ...userInfo } = user._doc;
  res.status(200).json({ user: userInfo });
};

// get all users
const getAllUsers = async (req, res) => {
  const { isNew } = req.query;

  const users = isNew
    ? await User.find().sort({ _id: -1 }).limit(2)
    : await User.find();

  res.status(200).json(users);
};

// get user stats
const getStats = async (req, res) => {
  const date = new Date();

  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  const data = await User.aggregate([
    { $match: { createdAt: { $gte: lastYear } } },
    {
      $project: {
        month: { $month: "$createdAt" },
      },
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: 1 },
      },
    },
  ]);

  res.status(200).json(data);
};

module.exports = {
  updateUserProfile,
  deleteUserProfile,
  getUserProfile,
  getAllUsers,
  getStats,
};
