"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookRouter_1 = __importDefault(require("../router/bookRouter"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.port || 2022;
require("../config/db");
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "server up!",
  });
});
app.use("/api", bookRouter_1.default);
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
