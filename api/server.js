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
mongoose.connect(
  `mongodb+srv://admin:${process.env.PASSWORD}@stepit.6cdla.mongodb.net/Pets?retryWrites=true&w=majority`
);

// ENDPOINTS

// [GET] / (Hello World endpoint)
server.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World!!!</h1>");
});

// [GET] /api/dogs (R of CRUD, fetch all dogs)
server.get("/api/dogs", (req, res) => {
  Dog.findAll().then((dogs) => {
    res.status(200).json(dogs);
  });
});

// [GET] /api/dogs/:id (R of CRUD, fetch dog by :id)

server.get("/api/dogs/:id", (req, res) => {
  const { id } = req.params;

  Dog.findById(id).then((dog) => {
    res.status(200).json(dog);
  });
});

// [POST] /api/dogs (C of CRUD, create new dog from JSON payload)

server.post("/api/dogs", express.json(), (req, res) => {
  const name = req.body.name;
  const weight = req.body.weight;
  //console.log("request", req);

  Dog.create({ name, weight }).then((dogs) => {
    res.status(201).json(dogs);
  });
});

// [PUT] /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
server.put("/api/dogs/:id", express.json(), (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Dog.update(id, changes).then((dogs) => {
    res.status(200).json(dogs);
  });
});

// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)

server.delete("/api/dogs/:id", express.json(), (req, res) => {
  const { id } = req.params;

  Dog.delete(id).then((dogs) => {
    res.status(200).json(dogs);
  });
});

// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server;
