const BadRequestError = require("../errors/BadRequestError");
const ConflictError = require("../errors/ConflictError");
const UnauthorizedError = require("../errors/UnauthorizedError");
const User = require("../models/UserModel");
const encryptPassword = require("../util/encryptPassword");
const checkPassword = require("../util/checkPassword");
const NotFoundError = require("../errors/NotFoundError");
const jwt = require("jsonwebtoken");

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
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  //check req
  if (!username || !password)
    throw new BadRequestError("username and password is required");

  // find user
  const user = await User.findOne({ username });
  if (!user) throw new NotFoundError("User not found");

  //   check password
  const isMatch = await checkPassword(password, user.password);

  if (!isMatch) throw new UnauthorizedError("Invalid password");

  //   create access token
  const accessToken = jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
      username: user.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "3d" }
  );

  // user logged in
  res.status(200).json({ message: "User logged in successfully", accessToken });
};

module.exports = {
  registerUser,
  loginUser,
};
