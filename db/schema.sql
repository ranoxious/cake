

-- Database Creation
CREATE DATABASE cake_db;

USE cake_db;


-- Table Creation
CREATE TABLE cake(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
cake_name VARCHAR(50),
devoured BOOLEAN,
date TIMESTAMP);
