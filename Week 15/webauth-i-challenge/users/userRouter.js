const db = require("../data/DBcongig");
const bcrypt = require("bcryptjs");
const express = require("express");

const UserRouter = express.Router();

UserRouter.get("/users", (req, res) => {
  db.find()
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The user information could not be retrieved." });
    });
});

UserRouter.post("/register", (req, res) => {
  if (
    !req.body.image_url ||
    !req.body.name ||
    !req.body.username ||
    !req.body.password
  ) {
    res.status(400).json({
      errorMessage:
        "Please provide username, name, password and an image url for the user."
    });
  } else {
    req.body.password = bcrypt.hashSync(req.body.password, 12);

    db.register(req.body)
      .then(account => {
        res.status(201).json(account);
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while saving the user to the database"
        });
      });
  }
});

UserRouter.put("/:id", (req, res) => {
  if (!req.body.name || !req.body.completed) {
    res.status(400).json({
      errorMessage: "Please provide name and completed for the user."
    });
  } else {
    db.update(req.params.id, req.body)
      .then(account => {
        if (!account) {
          res.status(404).json({
            message: "The user with the specified ID does not exist."
          });
        } else res.status(200).json(account);
      })
      .catch(error => {
        res
          .status(500)
          .json({ error: "The user information could not be modified." });
      });
  }
});

UserRouter.get("/logout", (req, res) => {
  db.remove(req.params.id)
    .then(account => {
      console.log(account);
      if (!account) {
        res.status(404).json({
          message: "The user with the specified ID does not exist."
        });
      } else {
        res.status(204).send({});
      }
    })
    .catch(error => {
      res.status(500).json({ error: "The user could not be removed" });
    });
});

module.exports = UserRouter;
