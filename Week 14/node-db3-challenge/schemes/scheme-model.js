const knex = require("knex");
const configureOptions = require("../knexfile").development;
const db = knex(configureOptions);

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  findSteps
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id: Number(id) })
    .first();
}

function findSteps(schemaID) {
  console.log(schemaID);
  return db("steps")
    .join("schemes", "steps.scheme_id", "=", "schemes.id")
    .where({ scheme_id: schemaID })
    .select(
      "steps.id",
      "steps.step_number",
      "steps.instructions",
      "schemes.scheme_name"
    );
}

function add(schema) {
  return db("schemes")
    .insert(schema)
    .then(ids => ({ id: ids[0] }));
}

function update(id, schema) {
  let oldObj = findById(id);
  db("schemes")
    .where("id", Number(id))
    .update(schema);
  return { new: findById(id), old: oldObj };
}

function remove(id) {
  return db("schemes")
    .where("id", Number(id))
    .first()
    .del();
}
