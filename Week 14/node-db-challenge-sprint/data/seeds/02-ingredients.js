exports.seed = function(knex) {
  return knex("ingredients")
    .truncate()
    .then(() => {
      return knex("ingredients").insert([
        {
          ingredient_name: "tomatoes"
        },
        { ingredient_name: "milk" },
        { ingredient_name: "cheese" }
      ]);
    });
};
