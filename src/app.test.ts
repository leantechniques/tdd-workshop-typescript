import request from "supertest";
import {app} from "./app";

it("should create health endpoint", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
});
