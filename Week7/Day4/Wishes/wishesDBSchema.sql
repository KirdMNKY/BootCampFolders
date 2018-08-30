-- Create DB
CREATE DATABASE wishesDB;
USE wishesDB;

CREATE TABLE wishes(
    id INT NOT NULL AUTO_INCREMENT,
    wish VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO wishes(wish)
VALUES  ("Win the lottery"),
        ("Get a free million dollar house"),
        ("Superhuman Strength, Speed, and Toughness");

SELECT * FROM wishes;