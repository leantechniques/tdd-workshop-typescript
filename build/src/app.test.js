"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("./app");
it("should run the server", async () => {
    const response = await supertest_1.default(app_1.app).get("/");
    expect(response.statusCode).toBe(200);
});
//# sourceMappingURL=app.test.js.map