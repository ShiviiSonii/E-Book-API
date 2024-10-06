import express from "express";
import { globalErrorHandler } from "./middlewares/globalHandler";

const app = express();

// ROUTES
app.get("/", (_req, res) => {
  res.send("Welcome to E-book project");
});

// error-handling middleware function
app.use(globalErrorHandler);

export default app;
