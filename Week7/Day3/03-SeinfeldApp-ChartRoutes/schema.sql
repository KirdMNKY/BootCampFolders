/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database seinfeld and specified it for use.
CREATE DATABASE seinfeld;
USE seinfeld;

-- Create the table actors.
CREATE TABLE actors (
  id INT AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  coolness_points INT NOT NULL,
  attitude VARCHAR(60) NOT NULL,
  PRIMARY KEY(id)
);

-- Insert a set of records.
INSERT INTO actors (name, coolness_points, attitude) VALUES  ("Jerry", 90, "relaxed"),
        ("Elaine", 80, "righteous"),
        ("Kramer", 20, "doofus"),
        ("George", 70, "selfish");

SELECT * FROM actors;