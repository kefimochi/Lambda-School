exports.seed = function(knex) {
  return knex("recipes_ingredients_bridge")
    .truncate()
    .then(() => {
      return knex("recipes_ingredients_bridge").insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          quantity: 2,
          units: "whole pizzas"
        },
        {
          recipe_id: 1,
          ingredient_id: 3,
          quantity: 1,
          units: "teaspoon"
        },
        { recipe_id: 2, ingredient_id: 2, quantity: 2, units: "glass" }
      ]);
    });
};
