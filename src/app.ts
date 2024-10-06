import express from "express";

const app = express();

//ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to E-book project");
});

export default app;
