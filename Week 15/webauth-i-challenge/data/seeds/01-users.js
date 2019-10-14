const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users")
    .truncate()
    .then(() => {
      return knex("users").insert([
        {
          username: "admin",
          name: "The Goddess of all Living",
          password: bcrypt.hashSync("password"),
          image_url:
            "https://github.com/kefimochi/Side-projects/blob/master/BJHu2X_n.jpg?raw=true"
        },
        {
          username: "kefi",
          name: "Kate Efi",
          password: bcrypt.hashSync("123"),
          image_url:
            "https://github.com/kefimochi/Side-projects/blob/master/BJHu2X_n.jpg?raw=true"
        }
      ]);
    });
};
