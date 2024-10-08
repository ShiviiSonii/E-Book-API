import { NextFunction } from "express";
import { Request, Response } from "express";

// TODO - CONFIGURE MULTER FOR ACCESSING THE MULTIMEDIA DATA

//TODO - CONFIGURE CLOUDINARY FOR STORING THE MULTIMEDIA DATA
export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Book created");
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
