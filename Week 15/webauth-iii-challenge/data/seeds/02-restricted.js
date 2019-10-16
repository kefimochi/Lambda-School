exports.seed = function(knex) {
  return knex("restricted")
    .truncate()
    .then(() => {
      return knex("restricted").insert([
        { secret_info: "Shall not read below!" },
        { secret_info: "You read it! HAahhahaha, now u r cursed 4ever" }
      ]);
    });
};
