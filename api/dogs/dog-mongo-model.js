const mongoose = require("mongoose");

const DogSchema = mongoose.Schema({
  name: String,
  weight: Number,
  color: String,
});

const Dog = mongoose.model("Dogs", DogSchema);

module.exports = Dog;
