const express = require("express");

const RecipesRouter = require("./routers/recipesRouter");
const IngredientsRouter = require("./routers/ingredientsRouter");

const server = express();

server.use(express.json());
server.use("/api/recipes", RecipesRouter);
server.use("/api/ingredients", IngredientsRouter);

module.exports = server;
