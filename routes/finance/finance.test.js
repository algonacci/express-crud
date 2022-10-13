const { response } = require("express");
const request = require("supertest");
const app = require("../../app");

describe("Test GET /finance", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app)
      .get("/finance")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
