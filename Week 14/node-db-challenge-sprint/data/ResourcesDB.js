const knex = require("knex");
const configOptions = require("../knexfile").development;
const db = knex(configOptions);

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};

function find() {
  console.log("Got to the find function");
  return db("resources");
}

function findById(id) {
  return db("resources").where({ id: Number(id) });
}

function insert(resource) {
  return db("resources")
    .insert(resource)
    .then(ids => ({ id: ids[0] }));
}

function update(id, resource) {
  return db("resources")
    .where("id", Number(id))
    .update(resource);
}

function remove(id) {
  return db("resources")
    .where("id", Number(id))
    .del();
}
