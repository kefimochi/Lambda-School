exports.seed = function(knex) {
  return knex("resources")
    .truncate()
    .then(() => {
      return knex("resources").insert([
        {
          name: "Hot tea in a water bottle",
          description: "No need for mugs!"
        },
        { name: "Kate, the awakened", description: "Can be sleepy at times" },
        { name: "Laptop", description: "Has stickers" },
        { name: "Employee card", description: "Gives discounts" },
        {
          name: "Positive attitude",
          description: "Can't go anywhere without it!"
        }
      ]);
    });
};
