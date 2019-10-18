const auth = require("./auth-router");
const authMiddleware = require("./authenticate-middleware");
const db = require("../database/dbConfig");
const supertest = require("supertest");
const server = require("../api/server");

describe("POST / login", () => {
  it("should return status 200 if the user successfully logged on", async () => {
    let response = await supertest(server)
      .post("/api/auth/login")
      .send({
        username: "admin",
        password: "password"
      });
    expect(response.status).toBe(200);
  });
  it("should return a generated token in case of successful login", async () => {
    let response = await supertest(server)
      .post("/api/auth/login")
      .send({
        username: "admin",
        password: "password"
      });
    expect(response.body.token).toBeTruthy();
  });
  it("should return 401 unauthorized if the user doesn't exist on the database", async () => {
    let response = await supertest(server)
      .post("/api/auth/login")
      .send({
        username: "admin",
        password: "123"
      });
    expect(response.status).toBe(401);
  });
});

describe("POST / register", () => {});
