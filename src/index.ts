import express, { Application } from "express";
import router from "../router/bookRouter";
import cors from "cors";

const app: Application = express();
const port: number | string = process.env.port || 2022;
require("../config/db");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "server up!",
  });
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
