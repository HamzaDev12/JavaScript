import { NextFunction, Request, Response } from "express";
import { codeError, exceptionst } from "../exeptions/root";

export const errorMiddleware = (
  error: exceptionst,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.statusCode).json({
    message: error.message,
    codeError: error.codeError,
    errors: error.errors,
  });
};
