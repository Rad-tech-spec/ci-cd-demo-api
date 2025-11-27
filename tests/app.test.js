const request = require("supertest");
const app = require("../src/index");

describe("API tests", () => {
  it("GET /health returns status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("healthy");
  });

  it("GET /greet returns default greeting", async () => {
    const res = await request(app).get("/greet");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello, World!");
  });
});
