const knex = require("knex");
const configureOptions = require("../knexfile").development;
const db = knex(configureOptions);

module.exports = {
  getRecipes,
  getInstructions,
  getShoppingList
};

function getRecipes() {
  return db("recipes");
}

//should return a list of all ingredients and quantities for a given recipe
function getShoppingList(id) {
  return db("schemes")
    .where({ id: Number(id) })
    .first();
}

//should return a list of step by step instructions for preparing a recipe
function getInstructions(schemaID) {
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
