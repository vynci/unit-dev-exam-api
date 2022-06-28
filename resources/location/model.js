const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema({
    address: String
});

module.exports = mongoose.model("Location", LocationSchema);
