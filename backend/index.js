// library imports
const dotenv = require("dotenv");
const express = require("express");
require("express-async-errors");

// local imports
const startUpServer = require("./util/startUpServer");
const userRouter = require("./routes/userRouter");

//instantiate app
const app = express();
dotenv.config();

// Port
const port = process.env.PORT || 3000;
const baseUrl = "/api";

// middleware
app.user(express.json());

// routes
app.use(`${baseUrl}/users`, userRouter);

// start server
startUpServer(port, app);
