import request from "supertest";
import app from "../src/app";
import prisma from "../src/lib/prisma";

jest.mock("../src/lib/prisma", () => ({
  $queryRaw: jest.fn().mockResolvedValue([
    { table_schema: "public", table_name: "users" },
    { table_schema: "public", table_name: "employees" },
  ]),
}));

describe("PG Controller", () => {
  it("GET /api/v1/pg should return list of tables", async () => {
    const res = await request(app).get("/api/v1/pg");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("data");
    expect(res.body.data.tables).toBeInstanceOf(Array);
    expect(res.body.data.count).toBeGreaterThan(0);
  });
});
