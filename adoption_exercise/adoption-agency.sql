DROP DATABASE IF EXISTS adoption;

CREATE DATABASE adoption;

\c adoption

CREATE TABLE pets (
  id SERIAL PRIMARY KEY, 
  name TEXT NOT NULL,
  species  TEXT NOT NULL,
  photo_url TEXT DEFAULT 'https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg',
  age INTEGER ,
  notes TEXT ,
  avaliable BOOLEAN NOT NULL DEFAULT true
);


INSERT INTO pets (name, species,photo_url,age,notes) VALUES ('Slime','Dog','https://media.istockphoto.com/id/508410282/photo/yorkshire-sitting-in-front-of-a-white-background.jpg?s=612x612&w=0&k=20&c=SH4uBQh78oGgsN4lAJsr9CqASlh7zBD_44fZbv46u2M=', 6, 'Small Dog');