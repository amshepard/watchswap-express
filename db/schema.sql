-- Drop the 'watchswap' database if it already exists
DROP DATABASE IF EXISTS watchswap;
-- Create a new database named 'watchswap'
CREATE DATABASE watchswap;

-- Connect to the 'watchswap' database
\c watchswap

-- Drop the 'watches' table if it already exists
DROP TABLE IF EXISTS watches;

-- Create a new table named 'watches' with an image_url column
CREATE TABLE watches (
    -- Define an auto-incrementing primary key column 'id'
    id SERIAL PRIMARY KEY,
    -- Define a 'brand' column with text data type that cannot be null
    brand TEXT NOT NULL,
    -- Define a 'model' column with text data type that cannot be null
    model TEXT NOT NULL,
    -- Define a 'year' column with an integer data type that cannot be null
    year INT NOT NULL,
    -- Define a 'condition' column with text data type that cannot be null
    condition TEXT NOT NULL,
    -- Define a 'price' column with a decimal data type that cannot be null
    price DECIMAL(10, 2) NOT NULL,
    -- Define an 'image_url' column with text data type for storing image URLs
    image_url TEXT
);
