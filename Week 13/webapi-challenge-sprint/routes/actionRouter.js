const express = require("express");
const actionRouter = express.Router();

const actionDb = require("../data/helpers/actionModel");
const validateAction = require("./middleware/validateAction");
const validateActionId = require("./middleware/validateActionId");

actionRouter.get("/", (req, res) => {
  actionDb
    .get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The action information could not be retrieved." });
    });
});

actionRouter.get("/:id", validateActionId, (req, res) => {
  try {
    res.status(200).json(req.action);
  } catch (error) {
    res
      .status(500)
      .json({ error: "The action information could not be retrieved." });
  }
});

actionRouter.post("/", validateAction, (req, res) => {
  actionDb
    .insert(req.body)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error while saving the action to the database"
      });
    });
});

actionRouter.delete("/:id", validateActionId, (req, res) => {
  actionDb
    .remove(req.params.id)
    .then(() => {
      res.status(204).json({});
    })
    .catch(error => {
      res.status(500).json({ error: "The project could not be removed" });
    });
});

actionRouter.put("/:id", validateActionId, validateAction, (req, res) => {
  actionDb
    .update(req.params.id, req.body)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The action information could not be modified." });
    });
});

module.exports = actionRouter;
