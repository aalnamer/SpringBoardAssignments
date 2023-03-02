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
  user_id  INTEGER REFERENCES users ON DELETE CASCADE
);

CREATE TABLE tags(

  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE posts_tags(
  post_id SERIAL PRIMARY KEY REFERENCES posts ON DELETE SET NULL ,
  tag_id SERIAL 
);

INSERT INTO users (first_name, last_name) VALUES ('John', 'Smith');
INSERT INTO posts(title,content,user_id) VALUES ('sample 1','sample 2',1);
INSERT INTO tags (name) VALUES ('Fun');
INSERT INTO posts_tags(post_id,tag_id) VALUES (1,1);
