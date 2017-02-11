CREATE DATABASE HotRestaurant_db;
USE HotRestaurant_db;

CREATE TABLE allTables (
   table_id INT NOT NULL AUTO_INCREMENT,
   reserve_name VARCHAR(100) NOT NULL,
   reserve_id INT(10) NOT NULL,
   available BOOLEAN not null default 1,
   PRIMARY KEY ( table_id )
);

ALTER TABLE allTables
ADD COLUMN email VARCHAR(15);
