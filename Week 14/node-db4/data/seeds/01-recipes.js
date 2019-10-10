exports.seed = function(knex) {
  return knex("recipes")
    .truncate()
    .then(() => {
      return knex("recipes").insert([
        {
          recipe_name: "Pizza",
          instructions:
            "Preheat oven, get the pizza from the store, cut it and put it in the oven"
        },
        { recipe_name: "Ice Cream", instructions: "Buy it. Profit!" }
      ]);
    });
};
