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
  return db("projects").then(projects => {
    return projects.map(project => {
      return { ...project, completed: Boolean(project.completed) };
    });
  });
}

function findById(id) {
  return db("projects")
    .where({ id: Number(id) })
    .then(projects => {
      return projects.map(proj => {
        return { ...proj, completed: Boolean(projects.completed) };
      });
    });
}

function findTasks(id) {
  return db("tasks")
    .join("projects", "tasks.project_id", "=", "projects.id")
    .where({ project_id: id })
    .select(
      "tasks.id",
      "tasks.description",
      "tasks.notes",
      "tasks.completed",
      "projects.name as project_name",
      "projects.description as project_description"
    )
    .then(tasks => {
      return tasks.map(task => {
        return { ...task, completed: Boolean(task.completed) };
      });
    });
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
