const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const customerRoutes = require("./routes/customerRoutes");
const membershipRoutes = require("./routes/membershipRoutes");
const seedMemberships = require("./config/seed");

dotenv.config();
connectDB(); // mongoDB connection
seedMemberships(); // membership data configuration

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/customers", customerRoutes);
app.use("/api/memberships", membershipRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
