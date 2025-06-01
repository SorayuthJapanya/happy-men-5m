const mongoose = require("mongoose");

const unlockHeartSchema = new mongoose.Schema(
  {
    passwordunlock: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UnlockHeart = mongoose.model("UnlockHeart", unlockHeartSchema);

module.exports = UnlockHeart;
