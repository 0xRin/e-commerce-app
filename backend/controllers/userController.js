const encryptPassword = require("../util/encryptPassword");
const User = require("../models/UserModel");
const NotFoundError = require("../errors/NotFoundError");

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

module.exports = { updateUserProfile };
