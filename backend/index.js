// library imports
const dotenv = require("dotenv");
const express = require("express");
require("express-async-errors");

// local imports
const startUpServer = require("./util/startUpServer");

//instantiate app
const app = express();
dotenv.config();

// Port
const port = process.env.PORT || 3000;

// middleware

// routes

// start server
startUpServer(port, app);
