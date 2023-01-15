const NotFoundError = require("../errors/NotFoundError");
const Order = require("../models/OrderModel");

// create product
const createOrder = async (req, res) => {
  const order = req.body;

  const newOrder = await Order.create(order);
  res.status(200).json("Order created!");
};

// update order
const updateOrder = async (req, res) => {
  const { id } = req.params;

  const foundOrder = await Order.findById(id);
  if (!foundOrder) throw new NotFoundError("Order not found");

  const updatedOrder = await Order.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
  );

  res.status(200).json({ updatedOrder });
};

// delete order
const deleteOrder = async (req, res) => {
  const { id } = req.params;

  const deletedOrder = await Order.findByIdAndDelete(id);

  if (!deletedOrder) throw new NotFoundError("Order not found");

  res.status(200).json(`Deleted order`);
};

// get order
const getOrder = async (req, res) => {
  const { id } = req.params;

  const foundOrder = await Order.find({ userId: id });
  if (!foundOrder) throw new NotFoundError("Order not found");

  res.status(200).json(foundOrder);
};

const getAllUserOrders = async (req, res) => {
  const allOrders = await Order.find();
  res.status(200).json(allOrders);
};

// get monthly incom
const getMonthlyIncome = async (req, res) => {
  console.log("income route");
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  const income = await Order.aggregate([
    { $match: { createdAt: { $gte: previousMonth } } },
    {
      $project: {
        month: { $month: "$createdAt" },
        sales: "$amount",
      },
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: "$sales" },
      },
    },
  ]);

  res.status(200).json(income);
};

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getOrder,
  getAllUserOrders,
  getMonthlyIncome,
};
