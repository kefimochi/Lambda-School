const knex = require("knex");
const configOptions = require("../knexfile").development;
const db = knex(configOptions);

module.exports = {
  find,
  findBy,
  findId,
  register,
  login,
  update,
  remove
};

function find() {
  console.log("Got to the find function");
  return db("users");
}

function findBy(str) {
  console.log("str", str.toString());
  return db("users").where({ username: str.toString() });
}

function findId(str) {
  return db("users")
    .where({ username: str.toString() })
    .select("users.id")
    .first();
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
function remove(id) {
  return db("users")
    .where("id", Number(id))
    .del();
}
