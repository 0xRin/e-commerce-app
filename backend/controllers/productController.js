const NotFoundError = require("../errors/NotFoundError");
const Product = require("../models/ProductModel");
const router = require("../routes/productRouter");

// create product
const createProduct = async (req, res) => {
  const product = req.body;

  const newProduct = await Product.create(product);
  res.status(200).json("Product created!");
};

// update product
const updateProduct = async (req, res) => {
  const { id } = req.params;

  const foundProduct = await Product.findById(id);
  if (!foundProduct) throw new NotFoundError("Product not found");

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
  );

  res.status(200).json({ updatedProduct });
};

// delete product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deletedProduct = await Product.findByIdAndDelete(id);

  if (!deletedProduct) throw new NotFoundError("Product not found");

  res.status(200).json(`Deleted product`);
};

// get product
const getProduct = async (req, res) => {
  const { id } = req.params;

  const foundProduct = await Product.findById(id);
  if (!foundProduct) throw new NotFoundError("Product not found");

  res.status(200).json(foundProduct);
};

const getAllProducts = async (req, res) => {
  let { isNew, categories } = req.query;
  categories = categories.split(",");
  let allProducts;

  if (isNew) {
    allProducts = await Product.find().sort({ createdAt: -1 }).limit(5);
  } else if (categories) {
    allProducts = await Product.find({
      categories: {
        $in: categories,
      },
    });
  } else {
    allProducts = await Product.find();
  }

  res.status(200).json(allProducts);
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
};
