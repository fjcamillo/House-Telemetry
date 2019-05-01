# House Telemetry

## SETUP

#### Requirements

Install the following

- git
- docker
- docker-compose
- yarn

#### Backend

1. Run `cd backend`
2. Run `yarn install`
3. Run `cp .env.example .env` then supply the correct values for the environment

#### Frontend

1. Run `cd frontend`
2. Run `yarn install`
3. Run `cp .env.example .env` then supply the correct values for the environment

#### Sensors

## RUNNING

Note: Before running the services, make sure that `docker` and `docker-compose` is installed

#### Development Environment

1. Run `cd deployment`
2. Run `docker-compose -f dev.dependency.docker-compose.yml up --build -d`. Builds the dependencies 
3. Run `docker-compose -f dev.docker-compose.yml up --build`. Builds the backend service

#### Production Environment

1. Run `cd deployment`
2. Run `docker-compose -f prod.dependency.docker-compose.yml up --build -d`. Builds the dependencies 
3. Run `docker-compose -f docker-compose.yml up --build`. Builds the backend service

# DEPLOYING

