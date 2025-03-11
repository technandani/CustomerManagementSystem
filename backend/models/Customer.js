const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /\S+@\S+\.\S+/ },
  contactNumber: { type: String, required: true },
  status: { type: String, enum: ["Gold", "Diamond"]},
  membershipID: { type: mongoose.Schema.Types.ObjectId, ref: "Membership"},
});

module.exports = mongoose.model("Customer", CustomerSchema);