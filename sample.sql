CREATE DATABASE books;

USE books;

CREATE TABLE authors (
	id   INTEGER PRIMARY KEY AUTO_INCREMENT,
	first_name	VARCHAR(255) NOT NULL,
	middle_name	VARCHAR(255),
	last_name	VARCHAR(255) NOT NULL
) CHARACTER SET utf8;

CREATE TABLE users (
	id		 INTEGER PRIMARY KEY AUTO_INCREMENT,
	nickname VARCHAR(255) NOT NULL,
	email	 VARCHAR(255),
) CHARACTER SET utf8;



SHOW TABLES;

INSERT INTO authors (first_name, last_name) VALUES("William","Shakespeare");
INSERT INTO authors (first_name, middle_name, last_name) VALUES("Edgar", "Allan", "Poe");
INSERT INTO authors (first_name, last_name) VALUES("Fyodor","Dostoyevsky");
INSERT INTO authors (first_name, last_name) VALUES("Gabriel","Garcia Marquez");

INSERT INTO authors (nickname, email) VALUES("goT","goT@gmail.com");
INSERT INTO authors (nickname, email) VALUES("david","david@gmail.com");

SELECT * FROM authors;
