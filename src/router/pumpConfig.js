const express = require("express");
const pumpConfig = require("../controllers/pumpConfigController");
const isAuthenticated = require("../middleware/auth");
const router = express.Router();

router.route("/").post(isAuthenticated, pumpConfig.addConfiguration);

module.exports = router;
