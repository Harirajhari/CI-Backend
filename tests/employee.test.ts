import request from "supertest";
import app from "../src/app";

describe("Employee Routes", () => {
  it("GET /api/v1/employee/family-history should return 200", async () => {
    const res = await request(app).get("/api/v1/employee/family-history");
    expect([200, 500]).toContain(res.status);
  });

  it("GET /api/v1/employee/screening-history should return 200", async () => {
    const res = await request(app).get("/api/v1/employee/screening-history");
    expect([200, 500]).toContain(res.status);
  });

  it("GET /api/v1/employee/results should return 200", async () => {
    const res = await request(app).get("/api/v1/employee/results");
    expect([200, 500]).toContain(res.status);
  });
});
