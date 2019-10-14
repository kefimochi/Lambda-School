const knex = require("knex");
const configOptions = require("../knexfile").development;
const db = knex(configOptions);

module.exports = {
  find,
  register,
  login,
  update
};

function find() {
  console.log("Got to the find function");
  return db("users");
}

function register(resource) {
  return db("users").insert(resource);
}

function login(resource) {
  return db("users")
    .insert(resource)
    .then(ids => ({ id: ids[0] }));
}

function update(id, resource) {
  return db("users")
    .where("id", Number(id))
    .update(resource);
}
