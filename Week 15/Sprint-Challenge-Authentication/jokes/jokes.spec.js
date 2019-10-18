const Hobbits = require("./jokes-router");
const db = require("../database/dbConfig");
const supertest = require("supertest");
const server = require("../api/server");

describe("GET / jokes model", () => {
  it("should return 401 hhtp status code when no user is logged in", async () => {
    let response = await supertest(server).get("/api/jokes");
    expect(response.status).toBe(401);
  });

  it("should return a 200 if a user logged in session is present", async () => {
    let logIn = await supertest(server)
      .post("/api/auth/login")
      .send({
        username: "admin",
        password: "password"
      });
    let response = await supertest(server)
      .get("/api/jokes")
      .set("Authorization", logIn.body.token);
    expect(response.status).toBe(200);
  });
});
