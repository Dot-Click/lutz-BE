const router = require("express").Router();
const auth = require("./auth");
const pumpConfig = require("./pumpConfig");

router.use("/auth", auth);
router.use("/config", pumpConfig);

module.exports = router;
