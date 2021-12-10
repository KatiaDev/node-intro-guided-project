// IMPORTS AT THE TOP
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const dogRouter = require("./dogs/dog-router");

// INSTANCE OF EXPRESS APP
const server = express();
server.use("/api/dogs", dogRouter);

// GLOBAL MIDDLEWARE
server.use(express.json());

// DB CONNECT

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:${process.env.PASSWORD}@stepit.6cdla.mongodb.net/Pets?retryWrites=true&w=majority`
    );
    console.log("MongoDB connected!");
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
};

connectDB();

server.get("/", (req, res) => {
  return res.status(200).send("<h1>Hello World!!!</h1>");
});

// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server;
