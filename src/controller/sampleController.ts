import { Request, Response, NextFunction } from "express";

export const sample = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  res.send("sample!!!");
  try {
  } catch (err) {
    next(err);
  }
};
