exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("recipe_name", 128).notNullable();
      tbl
        .text("instructions", 300)
        .notNullable()
        .defaultTo("TBD");
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("ingredient_name", 128).notNullable();
    })
    .createTable("recipes_ingredients_bridge", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("quantity")
        .unsigned()
        .notNullable()
        .defaultTo(1);
      tbl
        .string("units", 20)
        .notNullable()
        .defaultTo("g");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes_ingredients_bridge")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
