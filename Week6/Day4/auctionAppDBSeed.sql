DROP DATABASE IF EXISTS greatBayDB;

CREATE DATABASE greatBayDB;

USE greatBayDB;

CREATE TABLE bids (
    id INT NOT NULL AUTO_INCREMENT,
    -- numBids INT NULL,
    itemName VARCHAR(35),
    itemCat VARCHAR(35),
    highBid DECIMAL(10,2) NULL,
    PRIMARY KEY (id)
);

INSERT INTO bids (itemName, itemCat, highBid)
VALUES  ("Frying Pan", "Kitchen", 5.00),
        ("MacBook Air", "Electronics", 300.00),
        ("Logitech Mouse", "Electronics", 75.00);