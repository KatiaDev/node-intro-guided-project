const express = require("express");
const Dog = require("./dog-mongo-model");
const restrictAccess = require("../auth/middleware");
const router = express.Router();

// ENDPOINTS

// [GET] /api/dogs (R of CRUD, fetch all dogs)
router.get("/", restrictAccess, (req, res) => {
  Dog.find()
    .exec()
    .then((dogs) => {
      res.status(200).json(dogs);
    });
});

// // [GET] /api/dogs/:id (R of CRUD, fetch dog by :id)

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Dog.findById(id)
    .exec()
    .then((dog) => {
      res.status(200).json(dog);
    });
});

// // [POST] /api/dogs (C of CRUD, create new dog from JSON payload)

router.post("/", (req, res) => {
  const name = req.body.name;
  const weight = req.body.weight;
  const color = req.body.color;
  //console.log("request", req);

  new Dog({ name, weight, color }).save().then((dogs) => {
    res.status(201).json(dogs);
  });
});

// // [PUT] /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Dog.findByIdAndUpdate(id, changes)
    .exec()
    .then((dogs) => {
      res.status(200).json(dogs);
    });
});

// // [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Dog.findByIdAndDelete(id)
    .exec()
    .then((dogs) => {
      res.status(200).json(dogs);
    });
});
module.exports = router;
