const express = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

//ENDPOINTS

router.get("/", (req, res) => {
  User.find()
    .exec()
    .then((users) => {
      res.status(200).json(users);
    });
});

router.post("/register", async (req, res) => {
  try {
    console.log("body:", req.body);

    const newUser = await new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 14),
    }).save();

    res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: "error" });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email } = req.body;

    const foundUser = await User.findOne({ email }).exec();

    const token = jwt.sign(
      {
        email: foundUser.email,
      },
      process.env.JWT_SECRET
    );

    return res.status(200).json({ message: "Login successful.", token });
  } catch (err) {
    return res.status(500).json({ message: "error" });
  }
});

router.get("/logout", (req, res) => {
  return res.status(200).json({ message: "Logged out successfully." });
});

module.exports = router;
