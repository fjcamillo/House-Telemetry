# House Telemetry

# SETUP

### Backend

1. Run `cd backend`
2. Run `yarn install`
3. Run `cp .env.example .env` then supply the correct values for the environment

### Frontend

1. Run `cd frontend`
2. Run `yarn install`
3. Run `cp .env.example .env` then supply the correct values for the environment

### Sensors

# RUNNING

Note: Before running the services, make sure that `docker` and `docker-compose` is installed

### Development Environment

1. Run `docker-compose -f dev.docker-compose.yml up`

### Production Environment

1. Run `docker-compose up`

# DEPLOYING

