const express = require("express");
const router = express.Router();

const { createUnlockKey, unlockKey } = require("../controllers/unlockHeartController");

router.post("/create-unlock-key", createUnlockKey);
router.post("/unlock-key", unlockKey);

module.exports = router;
