-- migrate:up
CREATE SCHEMA IF NOT EXISTS pixel_battle;

CREATE USER app WITH PASSWORD 'pixelApp';
CREATE USER hasura WITH PASSWORD 'pixelHasura';
CREATE USER hasura_metadata WITH PASSWORD 'hasuraMetadata';

CREATE TABLE pixel_battle.user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash BYTEA NOT NULL,
    password_salt BYTEA NOT NULL
);
CREATE TABLE pixel_battle.pixel (
    id SERIAL PRIMARY KEY,
    x INTEGER NOT NULL CHECK (x >= 0),
    y INTEGER NOT NULL CHECK (y >= 0),
    color BYTEA NOT NULL CHECK (length(color) = 3),
    author_id INTEGER NOT NULL REFERENCES pixel_battle.user (id),
    creation_time TIMESTAMP WITH TIME ZONE NOT NULL,
    UNIQUE (x, y)
);

GRANT CREATE ON DATABASE postgres TO hasura_metadata;
GRANT USAGE ON SCHEMA pixel_battle TO app,
    hasura;
GRANT USAGE,
    SELECT ON ALL SEQUENCES IN SCHEMA pixel_battle TO app,
    hasura;
GRANT SELECT,
    INSERT,
    UPDATE,
    DELETE ON pixel_battle.pixel,
    pixel_battle.user TO app,
    hasura;

-- migrate:down
DROP TABLE IF EXISTS pixel_battle.pixel;
DROP TABLE IF EXISTS pixel_battle.user;

DROP SCHEMA IF EXISTS pixel_battle;

DROP USER IF EXISTS app;
DROP USER IF EXISTS hasura;

DROP OWNED BY hasura_metadata CASCADE;
DROP USER IF EXISTS hasura_metadata;