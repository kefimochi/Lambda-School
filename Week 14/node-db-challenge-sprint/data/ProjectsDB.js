const knex = require("knex");
const configOptions = require("../knexfile").development;
const db = knex(configOptions);

module.exports = {
  find,
  findById,
  findTasks,
  insert,
  insertTask,
  update,
  remove
};

function find() {
  console.log("Got to the find function");
  return db("projects");
}

function findById(id) {
  return db("projects").where({ id: Number(id) });
}

function findTasks(id) {
  return db("tasks").where({ project_id: Number(id) });
}

function insert(project) {
  return db("projects")
    .insert(project)
    .then(ids => ({ id: ids[0] }));
}

function insertTask(task) {
  return db("tasks")
    .insert(task)
    .then(ids => ({ id: ids[0] }));
}

function update(id, project) {
  return db("projects")
    .where("id", Number(id))
    .update(project);
}

function remove(id) {
  return db("projects")
    .where("id", Number(id))
    .del();
}
