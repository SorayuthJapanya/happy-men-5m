const UnlockHeart = require("../models/UnlockHearModel");

exports.createUnlockKey = async (req, res) => {
  try {
    const { key } = req.body;

    const existingKey = await UnlockHeart.findOne({ passwordunlock: key });
    if (existingKey)
      return res.status(400).json({ message: "Key already exists 😅" });

    const newKey = new UnlockHeart({
      passwordunlock: key,
    });

    await newKey.save();
    res.status(200).json({ message: "Unlock key created successfully 🔑" });
  } catch (error) {
    console.log("Error in createUnlockKey controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.unlockKey = async (req, res) => {
  try {
    const { key } = req.body;

    const isUnlock = await UnlockHeart.findOne({ passwordunlock: key });
    if (!isUnlock) return res.status(400).json({ message: "Incorrect key 🥺" });

    res.status(200).json({ message: "I love U na kub ❤️‍🔥" });
  } catch (error) {
    console.log("Error in unlockKey controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
