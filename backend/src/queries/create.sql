create database house;
\connect house;
create table sensors (
    id BIGSERIAL PRIMARY KEY,
    created_at BIGINT,
    updated_at BIGINT,
    deleted BOOLEAN,
    sensor_type TEXT,
    reading INTEGER
);