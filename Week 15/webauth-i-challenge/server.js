const express = require("express");

const UsersRouter = require("./routers/projectsRouter");
const ProtectedRouter = require("./routers/resourcesRouter");

const server = express();

server.use(express.json());
server.use("/api", UsersRouter);
server.use("/api/restricted", ProtectedRouter);

module.exports = server;
