DROP DATABASE IF EXISTS blogly;

CREATE DATABASE blogly;

\c blogly

CREATE TABLE users (
  id SERIAL PRIMARY KEY, 
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  image_url TEXT NOT NULL DEFAULT 'https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg'
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY, 
  title  TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TEXT,
  user_id  INTEGER REFERENCES Users ON DELETE CASCADE
);

