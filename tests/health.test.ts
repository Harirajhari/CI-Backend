import request from "supertest";
import app from "../src/app";

describe("GET /api/v1/health", () => {
  it("returns 200 and success true", async () => {
    const res = await request(app).get("/api/v1/health");

    // ✅ Expect 200 HTTP
    expect(res.status).toBe(200);

    // ✅ Match your actual ApiResponse structure
    expect(res.body).toHaveProperty("success", true);
    expect(res.body).toHaveProperty("message", "Up");

    // ✅ Check nested keys exist
    expect(res.body.data).toHaveProperty("node_env");
    expect(res.body.data).toHaveProperty("frontend_url");
  });
});
