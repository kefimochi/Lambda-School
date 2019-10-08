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
  return db("accounts");
}

function findById(id) {
  return db("accounts").where({ id: Number(id) });
}

function insert(post) {
  return db("accounts")
    .insert(post)
    .then(ids => ({ id: ids[0] }));
}

function update(id, post) {
  return db("accounts")
    .where("id", Number(id))
    .update(post);
}

function remove(id) {
  return db("accounts")
    .where("id", Number(id))
    .del();
}
