DROP DATABASE IF EXISTS Search;

CREATE DATABASE IF NOT EXISTS Search;

USE Search;

CREATE TABLE Categories (
  id INT NOT NULL PRIMARY KEY,
  name varchar(255) NOT NULL
);

CREATE TABLE Products (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES Categories (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
*/

