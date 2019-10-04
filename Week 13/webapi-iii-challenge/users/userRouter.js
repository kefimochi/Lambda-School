const express = require("express");
const userRouter = express.Router();

const userDb = require("./userDb");
const postDb = require("../posts/postDb");
const validatePost = require("../posts/middleware/validatePost");
const validateUserId = require("./middleware/validateUserId");
const validateUser = require("./middleware/validateUser");

userRouter.get("/", (req, res) => {
  userDb
    .get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The user information could not be retrieved." });
    });
});

userRouter.get("/:id", validateUserId, (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "The user information could not be retrieved." });
  }
});

userRouter.get("/:id/posts", validateUserId, async (req, res) => {
  try {
    const posts = await userDb.getUserPosts(req.params.id);
    posts.length > 0
      ? res.status(200).json(posts)
      : res.status(400).json({ message: "No posts for this user" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "The user information could not be retrieved." });
  }
});

userRouter.post("/", validateUser, (req, res) => {
  userDb
    .insert(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error while saving the user to the database"
      });
    });
});

userRouter.post("/:id/posts", validateUserId, validatePost, (req, res) => {
  postDb
    .insert({ ...req.body, user_id: req.params.id })
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "There was an error while adding post" });
    });
});

userRouter.delete("/:id", validateUserId, (req, res) => {
  userDb
    .remove(req.params.id)
    .then(user => {
      res.status(204).json({});
    })
    .catch(error => {
      res.status(500).json({ error: "The user could not be removed" });
    });
});

userRouter.put("/:id", validateUserId, validateUser, (req, res) => {
  userDb
    .update(req.params.id, req.body)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The user information could not be modified." });
    });
});

module.exports = userRouter;
