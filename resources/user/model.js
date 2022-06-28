const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  type: String
});

module.exports = mongoose.model("User", UserSchema);