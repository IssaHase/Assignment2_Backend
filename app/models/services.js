const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: { type: Number, required: false },
});

module.exports = mongoose.model("Service", ServiceSchema);
