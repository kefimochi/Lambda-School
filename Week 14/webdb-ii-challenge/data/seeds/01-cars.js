exports.seed = function(knex) {
  return knex("cars")
    .truncate()
    .then(function() {
      return knex("cars").insert([
        {
          VIN: "1HGBH41JXMN109186",
          make: "Honda",
          model: "Civic Sedan",
          mileage: "100007",
          "transmission status": "",
          "title status": "salvage"
        },
        {
          VIN: "2HGBH47UXMN109186",
          make: "Tesla",
          model: "Model 3",
          mileage: "70007",
          "transmission status": "",
          "title status": "clean"
        }
      ]);
    });
};
