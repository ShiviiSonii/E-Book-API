import express from "express";
import {
  createBook,
  deleteBook,
  fetchBook,
  updateBook,
} from "../controller/bookController";
import multer from "multer";
import path from "node:path";
const bookRoute = express.Router();

// TODO - CONFIGURE MULTER FOR ACCESSING THE MULTIMEDIA DATA
const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
  // limits: { fileSize: 30 },
});

//CREATE
bookRoute.post(
  "/",
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createBook
);

//READ
bookRoute.get("/", fetchBook);

//UPDATE
bookRoute.patch("/:id", updateBook);

//DELETE
bookRoute.delete("/", deleteBook);

export default bookRoute;
