import express from "express";
import { globalErrorHandler } from "./middlewares/globalHandler";
import userRoute from "./routes/userRoute";
import bookRoute from "./routes/bookRoute";
import dotenv from "dotenv";
const app = express();

dotenv.config();

app.use(express.json());

// ROUTES
app.get("/", (_req, res) => {
  res.send("Welcome to E-book project");
});

// User route
app.use("/api/users", userRoute);
app.use("/api/books", bookRoute);

// error-handling middleware function
app.use(globalErrorHandler);

export default app;
