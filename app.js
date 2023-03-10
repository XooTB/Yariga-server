import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./connect.js";

import cors from "cors";

import userRouter from "./routes/user.routes.js";
import propertyRouter from "./routes/property.routes.js";

// CONFIG AND INITIALIZATION
dotenv.config();

try {
  connectDB(process.env.MONGODB_URL);
} catch (err) {
  console.log(err);
}

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
