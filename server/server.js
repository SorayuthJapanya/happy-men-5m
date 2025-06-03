const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const unlockHeartRoutes = require("./routes/unlockHeartRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/lock", unlockHeartRoutes);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
