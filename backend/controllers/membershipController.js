const Membership = require("../models/Membership");

// Get All Memberships
const getMemberships = async (req, res) => {
  try {
    const memberships = await Membership.find();
    res.status(200).json({
      success: true,
      message: "Memberships fetched successfully.",
      memberships,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch memberships.",
      error: error.message,
    });
  }
};

module.exports = getMemberships;