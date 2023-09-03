const cors = require("cors");
const express = require("express");
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Watchswap. It's time to share.");
});

const watchesController = require("./controllers/watchesController.js");
app.use("/watches", watchesController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
const port = process.env.PORT || 3332;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
