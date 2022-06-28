const mongoose = require("mongoose");

const SalesSchema = mongoose.Schema({
    franchisee_id: String,
    location_id: String,
    date: Date,
    subtotal: Number,
    tax: Number,
    total: Number
});

module.exports = mongoose.model("Sales", SalesSchema);
