const express = require("express");
const db = require("../data/db");

const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The post information could not be retrieved." });
    });
});

postRouter.get("/:id", (req, res) => {
  db.findById(req.params.id)
    .then(user => {
      if (!user) {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      } else {
        res.status(200).json(user);
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The post information could not be retrieved." });
    });
});

postRouter.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.title || !req.body.contents) {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    });
  } else {
    db.insert(req.body)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while saving the post to the database"
        });
      });
  }
});

postRouter.put("/:id", (req, res) => {
  if (!req.body.title || !req.body.contents) {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    });
  } else {
    db.update(req.params.id, req.body)
      .then(user => {
        if (!user) {
          res.status(404).json({
            message: "The post with the specified ID does not exist."
          });
        } else res.status(200).json(user);
      })
      .catch(error => {
        res
          .status(500)
          .json({ error: "The post information could not be modified." });
      });
  }
});

postRouter.delete("/:id", (req, res) => {
  db.remove(req.params.id)
    .then(user => {
      if (!user) {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      } else {
        res.status(204);
      }
    })
    .catch(error => {
      res.status(500).json({ error: "The post could not be removed" });
    });
});

module.exports = postRouter;
