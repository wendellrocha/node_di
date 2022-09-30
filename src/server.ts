import "reflect-metadata";
import express from "express";

import router from "./routes";
import "./shared/container";

const app = express();

app.use(express.json());

app.use(router);

app.listen(1212, () => {
  console.log("Server started on port 1212");
});
