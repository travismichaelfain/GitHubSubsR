-- from the terminal run:
-- psql < air_traffic.sql

DROP DATABASE IF EXISTS air_traffic;
CREATE DATABASE air_traffic;
\c air_traffic

CREATE TABLE passengers (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);

CREATE TABLE airlines (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    city TEXT NOT NULL,
    country TEXT NOT NULL,
    UNIQUE (city, country)
);

CREATE TABLE flights (
    id SERIAL PRIMARY KEY,
    airline_id INTEGER NOT NULL REFERENCES airlines(id),
    from_location_id INTEGER NOT NULL REFERENCES locations(id),
    to_location_id INTEGER NOT NULL REFERENCES locations(id),
    departure TIMESTAMP NOT NULL,
    arrival TIMESTAMP NOT NULL,
    CHECK (from_location_id <> to_location_id)
);

CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    passenger_id INTEGER NOT NULL REFERENCES passengers(id),
    flight_id INTEGER NOT NULL REFERENCES flights(id),
    seat TEXT NOT NULL,
    UNIQUE (flight_id, seat)
);
