const db = require("./data/db");
const express = require("express");
const port = 5000;
const server = express();

server.use(express.json());

server.get("/api/users", (req, res) => {
  console.log(req.body);
  //   res.status(200).json(db.find());
  res.status(200);
});

server.post("/api/users", (req, res) => {
  console.log(req.body);
  //   if (!req.body.name || !req.body.bio) {
  //     res
  //       .status(400)
  //       .json({ errorMessage: "Please provide name and bio for the user." });
  //   } else {
  //     res.status(201).json({ url: "/hobbits", operation: "POST" });
  //   }
  res.status(201).send(req.body);
});

server.put("/hobbits", (req, res) => {
  res.status(200).json({ url: "/hobbits", operation: "PUT" });
});

server.delete("/hobbits", (req, res) => {
  res.sendStatus(204);
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
