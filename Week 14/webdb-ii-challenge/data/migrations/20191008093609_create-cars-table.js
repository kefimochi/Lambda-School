exports.up = function(knex) {
  return knex.schema.createTable("cars", cars => {
    cars.increments();
    cars
      .string("VIN", 17)
      .unique()
      .notNullable();
    cars.string("make").notNullable();
    cars.string("model").notNullable();
    cars.integer("mileage").notNullable();
    cars
      .string("transmission status", 128)
      .notNullable()
      .defaultTo("TBD");
    cars
      .string("title status", 128)
      .notNullable()
      .defaultTo("TBD");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
