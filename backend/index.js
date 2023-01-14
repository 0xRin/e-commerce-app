// library imports
const dotenv = require("dotenv");
const express = require("express");
require("express-async-errors");

// local imports
const startUpServer = require("./util/startUpServer");
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter");
const {
  errorHandlerMiddleware,
} = require("./middleware/errorHandlerMiddleware");

//instantiate app
const app = express();
dotenv.config();

// Port
const port = process.env.PORT || 3000;
const baseUrl = "/api";

// middleware
app.use(express.json());

// routes
app.use(`${baseUrl}/users`, userRouter);
app.use(`${baseUrl}/auth`, authRouter);
app.use(`${baseUrl}/products`, productRouter);

// Error Handler
app.use(errorHandlerMiddleware);

// start server
startUpServer(port, app);
