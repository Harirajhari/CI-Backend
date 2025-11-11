import request from "supertest";
import app from "../src/app";

describe("Health Check Routes", () => {
  it("GET / should return welcome text", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toContain("Welcome to Rapha Health App Backend");
  });

  it("GET /api/v1 should return 200", async () => {
    const res = await request(app).get("/api/v1");
    expect(res.status).toBe(200);
  });
});
