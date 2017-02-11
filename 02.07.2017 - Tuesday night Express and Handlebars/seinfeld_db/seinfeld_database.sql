CREATE DATABASE seinfeld_db;
USE seinfeld_db;
CREATE TABLE actors (
	id INTEGER(11) AUTO_INCREMENT NOT NULL primary key,
	name VARCHAR(50) NOT NULL,
    coolness_points INTEGER(11) NULL,
    attitude VARCHAR(50) NOT NULL
);

INSERT INTO actors(name,coolness_points,attitude) VALUES ("Jerry",70,"snarky");
INSERT INTO actors(name,coolness_points,attitude) VALUES ("Elaine",80,"righteous");
INSERT INTO actors(name,coolness_points,attitude) VALUES ("George",70,"selfish");
INSERT INTO actors(name,coolness_points,attitude) VALUES ("Kramer",20,"doofus");


CREATE TABLE actors
(
	id INTEGER(11) NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	coolness_points INTEGER(11) NULL,
    attitude VARCHAR(50) NOT NULL,
    PRIMARY KEY( id )
);


drop table actors;

SELECT stock_quantity FROM actors WHERE item_id = 1;
SELECT * FROM products;