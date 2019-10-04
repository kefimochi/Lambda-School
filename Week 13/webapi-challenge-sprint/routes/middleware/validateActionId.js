const actionDb = require("../../data/helpers/actionModel");

const validateActionId = (req, res, next) => {
  Number(req.params.id)
    ? actionDb
        .get(req.params.id)
        .then(response => {
          if (response) {
            req.action = response;
            next();
          } else res.status(400).json({ message: "Invalid action id" });
        })
        .catch(err => {
          res.status(500).json({
            message: "Difficulties retrieving action from the database",
            ...err
          });
        })
    : res.status(500).json({ error: "Data type mismatch on the id provided" });
};

module.exports = validateActionId;
