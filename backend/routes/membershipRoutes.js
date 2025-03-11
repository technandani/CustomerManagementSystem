const express = require("express");
const getMemberships  = require("../controllers/membershipController");

const router = express.Router();

router.get("/", getMemberships);

module.exports = router;