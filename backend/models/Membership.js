const mongoose = require("mongoose");

const MembershipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }
});

module.exports = mongoose.model("Membership", MembershipSchema);