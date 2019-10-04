const express = require("express");
const postRouter = express.Router();
const validatePost = require("./middleware/validatePost");

postRouter.get("/", (req, res) => {});

postRouter.get("/:id", (req, res) => {});

postRouter.delete("/:id", (req, res) => {});

postRouter.put("/:id", (req, res) => {});

module.exports = postRouter;
