exports.seed = function(knex) {
  return knex("tasks")
    .truncate()
    .then(() => {
      return knex("tasks").insert([
        {
          description: "Grab the water bottle",
          notes: "Ensure its clean!",
          completed: true,
          project_id: 3
        },
        {
          description: "Drink from the water bottle",
          completed: true,
          notes: "",
          project_id: 3
        },
        {
          description: "Drive to a nearby Ross",
          notes: "Avoid traffic",
          completed: false,
          project_id: 2
        },
        {
          description: "Present the discount card",
          notes: "Smile and be friendly",
          completed: true,
          project_id: 2
        },
        {
          description: "Wake up on time",
          notes: "At 8 am",
          completed: true,
          project_id: 1
        },
        {
          description: "Finish sprint early and draw",
          notes: "But ensure u take your time and do things correctly",
          completed: false,
          project_id: 1
        },
        {
          description: "Take a shower after the sprint",
          notes: "New soap!",
          completed: false,
          project_id: 1
        }
      ]);
    });
};
