require("dotenv").config();
const server = require("./server.js");

// Makes deployment at Heroku possible
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log("\n* Server Running on http://localhost:8000 *\n");
});
