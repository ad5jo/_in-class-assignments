CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

	id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
    chirp varchar(255) NOT NULL,
	date TIMESTAMP NOT NULL DEFAULT NOW(),
	PRIMARY KEY (id)

);
