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
  return db("cars");
}

function findById(id) {
  return db("cars").where({ id: Number(id) });
}

function insert(car) {
  return db("cars")
    .insert(car)
    .then(ids => ({ id: ids[0] }));
}

function update(id, car) {
  return db("cars")
    .where("id", Number(id))
    .update(car);
}

function remove(id) {
  return db("cars")
    .where("id", Number(id))
    .del();
}
