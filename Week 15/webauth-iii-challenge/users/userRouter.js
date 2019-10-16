const db = require("../data/DBcongig");
const bcrypt = require("bcryptjs");
const express = require("express");
const jwt = require("jsonwebtoken");

const restricted = require("./restrictedMiddleware");
const UserRouter = express.Router();

UserRouter.get("/users", restricted, (req, res) => {
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

UserRouter.post("/login", (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({
      errorMessage: "Please provide username and password for the user."
    });
  } else {
    // Remember to addd first() because it'll give an array
    db.findBy(req.body.username)
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
          const token = generateToken(user);
          req.session.user = user;
          res.status(200).json({ message: "Successfully logged in", token });
        } else res.status(401).json({ message: "Invalid user credentials" });
      })
      .catch(err =>
        res
          .status(500)
          .json({ error: "There was trouble when accessing the user" })
      );
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
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.send("error logging out");
      } else {
        res.send("Session successfully deleted, logged out.");
      }
    });
  }
});

function generateToken(user) {
  const payload = {
    subject: user.nickname,
    name: user.name,
    department: user.department
  };
  const secret = "idsfwgier37yehiwfe7rgfsdf73wupp999(^%$";
  const options = {
    expiresIn: "8h"
  };
  return jwt.sign(payload, secret, options);
}

module.exports = UserRouter;
