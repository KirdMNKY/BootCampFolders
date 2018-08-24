DROP DATABASE IF EXISTS personalizedPlaylistDB;

CREATE DATABASE personalizedPlaylistDB;

USE personalizedPlaylistDB;

CREATE TABLE playlist (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO playlist (title, artist, genre)
VALUES  ("If Only", "Dave Matthews Band", "Rock"),
        ("Yellow", "Coldplay", "Alternative"),
        ("You Say", "Lauren Daigle", "Christian Rock");

-- ### Alternative way to insert more than one row
-- INSERT INTO playlist (title, artist, genre)
-- VALUES ("vanilla", 2If Only", "Dave Matthews Band", "rock"ate", 3.10, 120), ("strawberry", 3.25, 75);

-- INSERT a couple of records 

INSERT INTO playlist (title, artist, genre)
VALUES  ("Tessellate", "Alt-J", "Alternative"),
        ("Keep Your Head Up", "Ben Howard", "Alternative"),
        ("Cruise", "Lazerhawk", "Retrowave");
/*
C - CREATE - INSERT INTO pets (name, type, age) VALUES (“fido”, “dog”, 3);
R - READ   - SELECT * FROM pets;
U - UPDATE - UPDATE pets SET name=“under dog” WHERE type = “dog”;
D - DELETE - DELETE FROM pets WHERE type = “mouse”;
*/

