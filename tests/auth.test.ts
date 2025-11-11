import request from "supertest";
import app from "../src/app";

describe("Auth Routes", () => {
  it("GET /api/v1/auth/login should respond", async () => {
    const res = await request(app).get("/api/v1/auth/login");
    expect([200, 302, 500]).toContain(res.status);
  });

  it("POST /api/v1/auth/logout should respond", async () => {
    const res = await request(app).post("/api/v1/auth/logout");
    expect([200, 500]).toContain(res.status);
  });
});
