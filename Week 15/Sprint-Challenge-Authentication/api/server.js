const express = require("express");
const session = require("express-session");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
const jokesRouter = require("../jokes/jokes-router.js");

// const sessionConfig = {
//   name: "sprint-challenge",
//   secret: "message is secret!",
//   cookie: {
//     maxAge: 1000 * 60,
//     secure: false,
//     httpOnly: true
//   },
//   resave: false,
//   saveUninitialized: false
// };

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
// server.use(session(sessionConfig));

server.use("/api/auth", authRouter);
server.use("/api/jokes", authenticate, jokesRouter);

module.exports = server;
