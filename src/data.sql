create database if not exists company;

USE company;

CREATE TABLE employees (
	id INT(11) NOT NULL auto_increment, 
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);

INSERT INTO employees values
	(1,'Anthony Ocampo', 15000),
	(2, 'Nahomy Cuellar',20000),
    (3, 'Cesar Collazos', 12000);
    
DESCRIBE employees;



