const db = require("../data/ResourcesDB");
const express = require("express");

const ResourcesRouter = express.Router();

ResourcesRouter.get("/", (req, res) => {
  db.find()
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The resource information could not be retrieved." });
    });
});

ResourcesRouter.get("/:id", (req, res) => {
  db.findById(req.params.id)
    .then(account => {
      if (!account) {
        res.status(404).json({
          message: "The resource with the specified ID does not exist."
        });
      } else {
        res.status(200).json(account);
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The resource information could not be retrieved." });
    });
});

ResourcesRouter.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.name) {
    res.status(400).json({
      errorMessage: "Please provide name for the resource."
    });
  } else {
    db.insert(req.body)
      .then(account => {
        res.status(201).json(account);
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while saving the resource to the database"
        });
      });
  }
});

ResourcesRouter.put("/:id", (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      errorMessage: "Please provide name the resource."
    });
  } else {
    db.update(req.params.id, req.body)
      .then(account => {
        if (!account) {
          res.status(404).json({
            message: "The resource with the specified ID does not exist."
          });
        } else res.status(200).json(account);
      })
      .catch(error => {
        res
          .status(500)
          .json({ error: "The resource information could not be modified." });
      });
  }
});

ResourcesRouter.delete("/:id", (req, res) => {
  db.remove(req.params.id)
    .then(account => {
      console.log(account);
      if (!account) {
        res.status(404).json({
          message: "The resource with the specified ID does not exist."
        });
      } else {
        res.status(204).send({});
      }
    })
    .catch(error => {
      res.status(500).json({ error: "The resource could not be removed" });
    });
});

module.exports = ResourcesRouter;
