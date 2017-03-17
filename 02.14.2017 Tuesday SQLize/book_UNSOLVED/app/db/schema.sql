### Schema

CREATE DATABASE sequelize_library;
USE sequelize_library;

CREATE TABLE Book
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	auther varchar(255) NOT NULL,
	genre varchar(255) NOT NULL,
	pages INTEGER,
	PRIMARY KEY (id)
);
