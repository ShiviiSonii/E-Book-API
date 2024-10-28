import { NextFunction } from "express";
import { Request, Response } from "express";
import cloudinary from "../config/cloudinary";
import path from "node:path";
import createHttpError from "http-errors";

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const files = req.files as { [fileName: string]: Express.Multer.File[] };

  try {
    const fileName = files.coverImage[0].filename;
    const filePath = path.resolve(
      __dirname,
      "../../public/data/uploads",
      fileName
    );
    const bookfileName = files.file[0].filename;
    const bookfilePath = path.resolve(
      __dirname,
      "../../public/data/uploads",
      bookfileName
    );

    const uploadResults = await cloudinary.uploader.upload(filePath, {
      filename_override: fileName,
      folder: "book-covers",
    });

    console.log(uploadResults);

    const bookFileUploadResults = await cloudinary.uploader.upload(
      bookfilePath,
      {
        resource_type: "raw",
        filename_override: bookfileName,
        folder: "book-pdfs",
        format: "pdf",
      }
    );

    console.log(bookFileUploadResults);
    res.json({});
  } catch (err) {
    console.error("Error uploading to Cloudinary:", err);
    return next(createHttpError(500, "Error while uploading the file"));
  }
};

export const fetchBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Book fetched");
};

export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Book updated");
};

export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Book deleted");
};
