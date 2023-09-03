// Import the database configuration module
const db = require("../db/dbConfig.js");

// Retrieve all watches from the 'watches' table
const getAllWatches = async () => {
  try {
    const allWatches = await db.any("SELECT * FROM watches");
    return allWatches;
  } catch (error) {
    return error;
  }
};

// Retrieve a single watch by its ID from the 'watches' table
const getWatch = async (id) => {
  try {
    const oneWatch = await db.one("SELECT * FROM watches WHERE id=$1", id);
    return oneWatch;
  } catch (err) {
    return err;
  }
};

// Create a new watch by inserting a record into the 'watches' table
const createWatch = async (watch) => {
  try {
    const newWatch = await db.one(
      "INSERT INTO watches (brand, model, year, condition) VALUES($1, $2, $3, $4) RETURNING *",
      [watch.brand, watch.model, watch.year, watch.condition]
    );

    return newWatch;
  } catch (err) {
    return err;
  }
};

// Delete a watch by its ID from the 'watches' table
const deleteWatch = async (id) => {
  try {
    const deletedWatch = await db.one(
      "DELETE FROM watches WHERE id = $1 RETURNING *",
      id
    );
    return deletedWatch;
  } catch (err) {
    return err;
  }
};

// Update an existing watch's information by its ID in the 'watches' table
const updateWatch = async (id, watch) => {
  try {
    const updatedWatch = await db.one(
      "UPDATE watches SET brand=$1, model=$2, year=$3, condition=$4, price=$5 WHERE id=$6 RETURNING *",
      [watch.brand, watch.model, watch.year, watch.condition, watch.price, id]
    );
    return updatedWatch;
  } catch (err) {
    return err;
  }
};


// Export all the defined functions to be used in other modules
module.exports = {
  getAllWatches,
  getWatch,
  createWatch,
  deleteWatch,
  updateWatch,
};
