const BadRequestError = require("../errors/BadRequestError");
const ConflictError = require("../errors/ConflictError");
const User = require("../models/UserModel");
const encryptPassword = require("../util/encryptPassword");

// register user
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new BadRequestError("Missing username, email, password");
  }

  // check if user is already registered
  const foundUser = await User.findOne({ username });

  if (foundUser) {
    throw new ConflictError("User already registered");
  }

  //   encrypt given passwor
  const encryptedPassword = await encryptPassword(password);

  //   create user
  const user = await User.create({
    username,
    email,
    password: encryptedPassword,
  });

  console.log(user);

  //   send status to client
  res.status(200).json({ message: "User created successfully" });
};

// login user
const loginUser = (req, res) => {};

module.exports = {
  registerUser,
  loginUser,
};
