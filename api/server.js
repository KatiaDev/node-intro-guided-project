// IMPORTS AT THE TOP
const express = require("express");
const Dog = require("./dogs/dog-model");
const mongoose = require("mongoose");
require("dotenv").config();

// INSTANCE OF EXPRESS APP
const server = express();

// GLOBAL MIDDLEWARE
//server.use = express.json();

// DB CONNECT

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:${process.env.PASSWORD}@stepit.6cdla.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    console.log("MongoDB connected!");
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
};

connectDB();

// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server;
