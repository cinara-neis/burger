DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    burger_id INT AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    burger_devoured BOOLEAN
    PRIMARY KEY (burger_id)
);
