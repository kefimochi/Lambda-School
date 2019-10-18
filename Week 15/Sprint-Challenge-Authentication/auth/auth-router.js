const router = require("express").Router();
const db = require("../database/dbConfig");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/register", (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({
      errorMessage: "Please provide username and password for the user."
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

router.post("/login", (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({
      errorMessage:
        "Please provide username and password for the user when logging in."
    });
  } else {
    // Remember to add first() because it'll give an array
    db.findBy(req.body.username)
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
          const token = generateToken(user);
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

function generateToken(user) {
  const payload = {
    nickname: user.nickname
  };
  const secret = "idsfwgTARDISr37yehiwfe7rgfsdf73wupp999(^%$";
  const options = {
    expiresIn: "8h"
  };
  return jwt.sign(payload, secret, options);
}

module.exports = router;
