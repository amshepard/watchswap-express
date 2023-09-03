const express = require("express");
const watches = express.Router();
const {
  getAllWatches,
  getWatch,
  createWatch,
  updateWatch,
  deleteWatch,
} = require("../queries/watches");

// INDEX
// Route to retrieve all watches
watches.get("/", async (req, res) => {
  try {
    const allWatches = await getAllWatches();
    if (allWatches.length > 0) {
      res.status(200).json(allWatches);
    } else {
      res.status(404).json({ error: "No watches found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// SHOW
// Route to retrieve a specific watch by its ID
watches.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const watch = await getWatch(id);
    if (watch) {
      res.status(200).json(watch);
    } else {
      res.status(404).json({ error: "Watch not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// CREATE
// Route to create a new watch
watches.post("/", async (req, res) => {
  try {
    const newWatch = await createWatch(req.body);
    res.status(201).json(newWatch);
  } catch (error) {
    res.status(400).json({ error: "Invalid input" });
  }
});

// UPDATE
// Route to update an existing watch by its ID
watches.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedWatch = await updateWatch(id, req.body);
    if (updatedWatch) {
      res.status(200).json(updatedWatch);
    } else {
      res.status(404).json({ error: "Watch not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid input" });
  }
});

// DELETE
// Route to delete a watch by its ID
watches.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedWatch = await deleteWatch(id);
    if (deletedWatch) {
      res.status(200).json(deletedWatch);
    } else {
      res.status(404).json({ error: "Watch not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = watches;
