const userDb = require("../userDb");

const validateUserId = (req, res, next) => {
  Number(req.params.id)
    ? userDb
        .getById(req.params.id)
        .then(response => {
          if (response) {
            req.user = response;
            next();
          } else res.status(400).json({ message: "Invalid user id" });
        })
        .catch(err => {
          res.status(500).json({
            message: "Difficulties retrieving user from the database",
            ...err
          });
        })
    : res.status(500).json({ error: "Data type mismatch" });
};

module.exports = validateUserId;

// res.user -> read it on the userRouter, less extra calls
