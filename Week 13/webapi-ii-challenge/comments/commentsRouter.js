const express = require("express");
const db = require("../data/db");

const commentRouter = express.Router();

commentRouter.get("/:id/comments", (req, res) => {
  db.findPostComments(req.params.id)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The comments information could not be retrieved." });
    });
});

commentRouter.post("/:id/comments", (req, res) => {
  if (!req.body.text) {
    res.status(400).json({
      errorMessage: "Please provide text for the comment."
    });
  } else {
    db.insertComment(req.body)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while saving the comment to the database"
        });
      });
  }
});

module.exports = commentRouter;
