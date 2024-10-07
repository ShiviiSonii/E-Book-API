import { NextFunction, Response, Request } from "express";
import createHttpError from "http-errors";
import user from "../model/userModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { config } from "../config/config";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return next(createHttpError(400, "All fields are mandatory"));
    }

    // Check if user already exists
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return next(createHttpError(400, "User already exists!"));
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const createdUser = await user.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ name }, config.jwt_secret_key!, {
      expiresIn: 86400,
    });

    // Respond with success message or the created user
    res.status(201).json({
      message: "User created successfully",
      user: createdUser,
      accessToken: token,
    });
  } catch (error) {
    // Pass any unexpected errors to the error handler
    next(error);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return next(createHttpError(400, "All fields are mandatory"));
    }

    // Check if user already exists
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      return next(createHttpError(404, "User not found!"));
    }

    // Compare the password
    const isMatch = bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return next(createHttpError(400, "Invalid Credentials"));
    }

    const token = jwt.sign({ email }, config.jwt_secret_key!, {
      expiresIn: 86400,
    });

    // Respond with success message or the created user
    res.status(201).json({
      message: "User logged in successfully",
      accessToken: token,
    });
  } catch (error) {
    // Pass any unexpected errors to the error handler
    next(error);
  }
};
