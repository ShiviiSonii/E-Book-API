import { NextFunction, Response, Request } from "express";
import createHttpError from "http-errors";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  //validation
  if (!name || !email || !password) {
    const error = createHttpError(400, "All fields are mandatory");
    next(error);
  }

  //process
  //response
};

export { createUser };
