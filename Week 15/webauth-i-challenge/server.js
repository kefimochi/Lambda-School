const express = require("express");

const UsersRouter = require("./users/userRouter");
const RestrictedRouter = require("./restricted/restrictedRouter");

const server = express();

server.use(express.json());
server.use("/api", UsersRouter);
server.use("/api/restricted", RestrictedRouter);

module.exports = server;
