const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("mongoDB Connected!");
  } catch (error) {
    console.error("mongoDB Connection Failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;