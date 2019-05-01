from node:latest
WORKDIR /app
COPY . .
EXPOSE 3500
CMD "yarn start:dev"