To create a database

CREATE DATABASE mydb;
========================================
To use created db

USE mydb;
===============+++===========
To create a table in db

CREATE TABLE profile(
        Id varchar(99) primary key, 
        name varchar(50) not null, 
        email varchar(50) not null, 
        password varchar(50) not null
);

========================================
to show databases

SHOW DATABASES;
========================================

To insert a value in row of a table

INSERT INTO profile ( ID, name, email, password)
value ( '12', 'sai', sai@gmail.com'', 'pass')

========================================

To get the specific details by conditions

SELECT * FROM profile WHERE Id = '12'

Output will be
Id    name      email                 password 
12   sai    sai@gmail.com       pass

========================================