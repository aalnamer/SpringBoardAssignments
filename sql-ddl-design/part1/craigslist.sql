DROP DATABASE IF EXISTS craigslist;
CREATE DATABASE craigslist;
\c craigslist;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);

CREATE TABLE region(
    id SERIAL PRIMARY KEY,
    location TEXT NOT NULL
);

CREATE TABLE category(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INTEGER REFERENCES users ON DELETE SET NULL,
    category_id INTEGER REFERENCES category ON DELETE SET NULL
    location_id INTEGER REFERENCES region ON DELETE SET NULL,
);
