const Hobbits = require("./jokes-router");
const db = require("../database/dbConfig");
const supertest = require("supertest");
const server = require("../api/server");

describe("GET / jokes model", () => {
  it("should return 401 hhtp status code when no user is logged in", async () => {
    let response = await supertest(server).get("/api/jokes");
    expect(response.status).toBe(401);
  });
});
