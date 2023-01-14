const NotFoundError = require("../errors/NotFoundError");
const Cart = require("../models/CartModel");

// create product
const createCart = async (req, res) => {
  const cart = req.body;

  const newCart = await Cart.create(cart);
  res.status(200).json("Cart created!");
};

// update cart
const updateCart = async (req, res) => {
  const { id } = req.params;

  const foundCart = await Cart.findById(id);
  if (!foundCart) throw new NotFoundError("Cart not found");

  const updatedCart = await Cart.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
  );

  res.status(200).json({ updatedCart });
};

// delete cart
const deleteCart = async (req, res) => {
  const { id } = req.params;

  const deletedCart = await Cart.findByIdAndDelete(id);

  if (!deletedCart) throw new NotFoundError("Cart not found");

  res.status(200).json(`Deleted cart`);
};

// get cart
const getCart = async (req, res) => {
  const { id } = req.params;

  const foundCart = await Cart.findOne({ userId: id });
  if (!foundCart) throw new NotFoundError("Cart not found");

  res.status(200).json(foundCart);
};

const getAllUserCarts = async (req, res) => {
  const allCarts = await Cart.find();
  res.status(200).json(allCarts);
};

module.exports = {
  createCart,
  updateCart,
  deleteCart,
  getCart,
  getAllUserCarts,
};
