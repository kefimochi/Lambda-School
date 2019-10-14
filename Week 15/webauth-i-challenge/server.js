const express = require("express");
const session = require("express-session");

const UsersRouter = require("./users/userRouter");
const RestrictedRouter = require("./restricted/restrictedRouter");

const server = express();

const sessionConfig = {
  name: "cookie-monster",
  secret: "message is secret!",
  cookie: {
    maxAge: 1000 * 60,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false
};

server.use(express.json());
server.use(session(sessionConfig));
server.use("/api", UsersRouter);
server.use("/api/restricted", RestrictedRouter);

module.exports = server;
