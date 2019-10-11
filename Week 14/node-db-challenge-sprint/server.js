const express = require("express");

const ProjectsRouter = require("./routers/projectsRouter");
const ResourcesRouter = require("./routers/resourcesRouter");

const server = express();

server.use(express.json());
server.use("/api/resources", ResourcesRouter);
server.use("/api/projects", ProjectsRouter); //also get the tasks from there

module.exports = server;
