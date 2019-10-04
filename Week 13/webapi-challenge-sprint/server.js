const express = require("express");
const server = express();

const actionRouter = require("./routes/actionRouter");
const projectRouter = require("./routes/projectRouter");

server.get("/", (req, res) => {
  res.send(`<h2>Welcome to the Sprint Assignment!</h2>`);
});

server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

module.exports = server;
