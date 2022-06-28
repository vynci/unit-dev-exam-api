const mongoose = require("mongoose");

const FranchiseeSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    location_ids: Array
});

module.exports = mongoose.model("Franchisee", FranchiseeSchema);
