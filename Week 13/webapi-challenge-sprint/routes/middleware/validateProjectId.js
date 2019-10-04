const projectDb = require("../../data/helpers/projectModel");

const validateProjectId = (req, res, next) => {
  Number(req.params.id)
    ? projectDb
        .get(req.params.id)
        .then(response => {
          if (response) {
            req.project = response;
            next();
          } else res.status(400).json({ message: "Invalid project id" });
        })
        .catch(err => {
          res.status(500).json({
            message: "Difficulties retrieving project from the database",
            ...err
          });
        })
    : res.status(500).json({ error: "Data type mismatch on the id provided" });
};

module.exports = validateProjectId;
