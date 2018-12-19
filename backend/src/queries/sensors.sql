create database house;
create table sensors (
    id BIGSERIAL PRIMARY KEY,
    created_at BIGINT,
    updated_at BIGINT,
    deleted BIGINT,
    sensor_type TEXT,
    reading INTEGER
);