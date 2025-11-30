const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String // student, admin, etc.
});

module.exports = mongoose.model("User", UserSchema);
