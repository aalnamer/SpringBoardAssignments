DROP DATABASE IF EXISTS soccer_league;

CREATE DATABASE soccer_league;

\c soccer_league;

CREATE TABLE season(
    id SERIAL PRIMARY KEY,
    start_date date NOT NULL,
    end_date date NOT NUll
);

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE players(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    team_id INTEGER REFERENCES teams ON DELETE SET NULL
);

CREATE TABLE referes (
    id  SERIAL PRIMARY KEY,
    ref_name TEXT NOT NULL
);

CREATE TABLE leagues(
    id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES teams ON DELETE SET NULL,
    player_id INTEGER REFERENCES players ON DELETE SET NULL
);

CREATE TABLE match(
    id SERIAL PRIMARY KEY,
    home_id INTEGER REFERENCES teams ON DELETE SET NULL,
    away_id INTEGER REFERENCES teams ON DELETE SET NULL,
    ref_id INTEGER REFERENCES referes ON DELETE SET NULL,
    season_id INTEGER REFERENCES season ON DELETE SET NULL
);

CREATE TABLE results(
    id SERIAL PRIMARY KEY,
    match_id INTEGER REFERENCES match ON DELETE SET NULL,
    team_id INTEGER REFERENCES teams ON DELETE SET NULL,
    results TEXT NOT NULL

)