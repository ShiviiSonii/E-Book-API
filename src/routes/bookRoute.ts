import express from "express";
import {
  createBook,
  deleteBook,
  fetchBook,
  updateBook,
} from "../controller/bookController";
const bookRoute = express.Router();

//CREATE
bookRoute.post("/", createBook);

//READ
bookRoute.get("/", fetchBook);

//UPDATE
bookRoute.patch("/:id", updateBook);

//DELETE
bookRoute.delete("/", deleteBook);

export default bookRoute;
