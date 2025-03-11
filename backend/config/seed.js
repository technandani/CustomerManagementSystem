const mongoose = require("mongoose");
const connectDB = require("./db");
const Membership = require("../models/Membership");

const seedMemberships = async () => {
  try {
    const isConnected = mongoose.connection.readyState === 1; // Check if MongoDB is connected
    if (!isConnected) {
      console.log("Connecting to MongoDB...");
      await connectDB();
    }

    const memberships = [
      { name: "Gold Membership", price: 100 },
      { name: "Diamond Membership", price: 200 },
      { name: "Platinum Membership", price: 300 },
    ];

    for (const membership of memberships) {
      // Check if membership exists
      const exists = await Membership.findOne({ name: membership.name });

      if (!exists) {
        // Insert only if Membership doesn’t exist
        await Membership.create(membership);
        console.log(`membership Added: ${membership.name}`);
      } else {
        console.log(`membership exists`);
      }
    }

    console.log("seeding Completed!");
  } catch (error) {
    console.error("error seeding memberships:", error);
  }
};

module.exports = seedMemberships ;