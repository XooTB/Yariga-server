import http from "http";
import app from "./app.js";
import connectDB from "./connect.js";

const port = process.env.PORT || 4000;

const server = http.createServer(app);

try {
  connectDB(process.env.MONGODB_URL);
  server.listen(port);
} catch (err) {
  console.log(err.message);
}
