const restricted = require("../users/restrictedMiddleware");
const db = require("../data/DBcongig");
const express = require("express");

const RestrictedRouter = express.Router();

RestrictedRouter.get("/info", restricted, (req, res) => {
  db.findSecret()
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The project information could not be retrieved." });
    });
});

module.exports = RestrictedRouter;
