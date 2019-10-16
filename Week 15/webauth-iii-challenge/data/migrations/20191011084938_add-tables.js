exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl
        .string("name", 128)
        .notNullable()
        .defaultTo("");
      tbl
        .string("password", 18)
        .notNullable()
        .defaultTo("");
      tbl
        .text("image_url", 150)
        .notNullable()
        .defaultTo("");
      tbl
        .text("department", 150)
        .notNullable()
        .defaultTo("");
    })
    .createTable("restricted", tbl => {
      tbl.increments();
      tbl
        .string("secret_info", 130)
        .notNullable()
        .defaultTo("Its a secret!");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("restricted");
};
