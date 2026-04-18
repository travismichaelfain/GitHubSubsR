-- from the terminal run:
-- psql < outer_space.sql

DROP DATABASE IF EXISTS outer_space;
CREATE DATABASE outer_space;
\c outer_space

CREATE TABLE galaxies (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE planets (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    orbital_period_in_years NUMERIC NOT NULL,
    orbits_around TEXT NOT NULL,
    galaxy_id INTEGER NOT NULL REFERENCES galaxies(id)
);

CREATE TABLE moons (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    planet_id INTEGER NOT NULL REFERENCES planets(id) ON DELETE CASCADE,
    UNIQUE (name, planet_id)
);
