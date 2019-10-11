exports.seed = function(knex) {
  return knex("projects")
    .truncate()
    .then(() => {
      return knex("projects").insert([
        {
          name: "Backend sprint",
          description: "Has to be completed on 10/11/2019",
          completed: false
        },
        {
          name: "Buy at 40% Ross discount",
          description: "Lasts until tomorrow!",
          completed: false
        },
        { name: "Drink tea", description: "Super healthy!", completed: true }
      ]);
    });
};
