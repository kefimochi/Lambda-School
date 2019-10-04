const express = require("express");
const projectRouter = express.Router();

const projectDb = require("../data/helpers/projectModel");
const validateProject = require("./middleware/validateProject");
const validateProjectId = require("./middleware/validateProjectId");

projectRouter.get("/", (req, res) => {
  projectDb
    .get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The project information could not be retrieved." });
    });
});

projectRouter.get("/:id", validateProjectId, (req, res) => {
  try {
    res.status(200).json(req.project);
  } catch (error) {
    res
      .status(500)
      .json({ error: "The project information could not be retrieved." });
  }
});

projectRouter.get("/:id/actions", validateProjectId, async (req, res) => {
  try {
    const actions = await projectDb.getProjectActions(req.params.id);
    actions.length > 0
      ? res.status(200).json(actions)
      : res.status(400).json({ message: "No actions for this project" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "The actions information could not be retrieved." });
  }
});

projectRouter.post("/", validateProject, (req, res) => {
  projectDb
    .insert(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error while saving the project to the database"
      });
    });
});

projectRouter.delete("/:id", validateProjectId, (req, res) => {
  projectDb
    .remove(req.params.id)
    .then(() => {
      res.status(204).json({});
    })
    .catch(error => {
      res.status(500).json({ error: "The project could not be removed" });
    });
});

projectRouter.put("/:id", validateProjectId, validateProject, (req, res) => {
  projectDb
    .update(req.params.id, req.body)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The project information could not be modified." });
    });
});

module.exports = projectRouter;
