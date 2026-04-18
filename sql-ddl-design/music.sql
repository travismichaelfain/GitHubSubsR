-- from the terminal run:
-- psql < music.sql

xDROP DATABASE IF EXISTS music;
CREATE DATABASE music;
\c music

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE producers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL
);

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    duration_in_seconds INTEGER NOT NULL,
    release_date DATE NOT NULL,
    album_id INTEGER REFERENCES albums(id)
);

CREATE TABLE song_artists (
    song_id INTEGER NOT NULL REFERENCES songs(id) ON DELETE CASCADE,
    artist_id INTEGER NOT NULL REFERENCES artists(id),
    PRIMARY KEY (song_id, artist_id)
);

CREATE TABLE song_producers (
    song_id INTEGER NOT NULL REFERENCES songs(id) ON DELETE CASCADE,
    producer_id INTEGER NOT NULL REFERENCES producers(id),
    PRIMARY KEY (song_id, producer_id)
);
