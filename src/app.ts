import express from "express";
import { globalErrorHandler } from "./middlewares/globalHandler";
import userRoute from "./routes/userRoute";

const app = express();

app.use(express.json());

// ROUTES
app.get("/", (_req, res) => {
  res.send("Welcome to E-book project");
});

// User route
app.use("/api/users", userRoute);

// error-handling middleware function
app.use(globalErrorHandler);

export default app;
