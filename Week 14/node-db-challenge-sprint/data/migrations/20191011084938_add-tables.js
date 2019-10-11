exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl
        .text("description", 300)
        .notNullable()
        .defaultTo("TBD");
      tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("name").unique();
      tbl
        .text("description", 300)
        .notNullable()
        .defaultTo("TBD");
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl
        .text("description", 300)
        .notNullable()
        .defaultTo("TBD");
      tbl
        .text("notes", 300)
        .notNullable()
        .defaultTo("TBD");
      tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("todos", tbl => {
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("todos")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
