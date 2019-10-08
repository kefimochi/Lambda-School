const express = require("express");
const server = express();

const carRouter = require("./carRouter");

server.get("/", (req, res) => {
  res.send(`<h2>Welcome to writing Knex!</h2>`);
});

server.use(express.json());
server.use("/api/cars", carRouter);

module.exports = server;
