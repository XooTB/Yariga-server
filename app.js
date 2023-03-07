import express from "express";
import * as dotenv from "dotenv";

import cors from "cors";

import userRouter from "./routes/user.routes.js";
import propertyRouter from "./routes/property.routes.js";

// CONFIG AND INITIALIZATION
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// ROUTES
app.get("/", async (req, res) => {
  res.status(200).send("API WORKING.");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/properties", propertyRouter);

export default app;
