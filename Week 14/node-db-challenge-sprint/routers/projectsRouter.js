const db = require("../data/ProjectsDB");
const express = require("express");

const ProjectsRouter = express.Router();

ProjectsRouter.get("/", (req, res) => {
  db.find()
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The project information could not be retrieved." });
    });
});

ProjectsRouter.get("/:id", (req, res) => {
  db.findById(req.params.id)
    .then(account => {
      if (!account) {
        res.status(404).json({
          message: "The project with the specified ID does not exist."
        });
      } else {
        res.status(200).json(account);
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The project information could not be retrieved." });
    });
});

ProjectsRouter.get("/:id/tasks", (req, res) => {
  db.findTasks(req.params.id)
    .then(account => {
      if (!account) {
        res.status(404).json({
          message: "The project with the specified ID does not exist."
        });
      } else {
        res.status(200).json(account);
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The project information could not be retrieved." });
    });
});

ProjectsRouter.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.name || !req.body.completed) {
    res.status(400).json({
      errorMessage: "Please provide name and completed for the project."
    });
  } else {
    db.insert(req.body)
      .then(account => {
        res.status(201).json(account);
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while saving the project to the database"
        });
      });
  }
});

ProjectsRouter.post("/:id/tasks", (req, res) => {
  console.log(req.body);
  if (!req.body.description || !req.body.completed) {
    res.status(400).json({
      errorMessage: "Please provide description and completed for the project."
    });
  } else {
    db.insertTask(req.body)
      .then(account => {
        res.status(201).json(account);
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while saving the project to the database"
        });
      });
  }
});

ProjectsRouter.put("/:id", (req, res) => {
  if (!req.body.name || !req.body.completed) {
    res.status(400).json({
      errorMessage: "Please provide name and completed for the project."
    });
  } else {
    db.update(req.params.id, req.body)
      .then(account => {
        if (!account) {
          res.status(404).json({
            message: "The project with the specified ID does not exist."
          });
        } else res.status(200).json(account);
      })
      .catch(error => {
        res
          .status(500)
          .json({ error: "The project information could not be modified." });
      });
  }
});

ProjectsRouter.delete("/:id", (req, res) => {
  db.remove(req.params.id)
    .then(account => {
      console.log(account);
      if (!account) {
        res.status(404).json({
          message: "The project with the specified ID does not exist."
        });
      } else {
        res.status(204).send({});
      }
    })
    .catch(error => {
      res.status(500).json({ error: "The project could not be removed" });
    });
});

module.exports = ProjectsRouter;
