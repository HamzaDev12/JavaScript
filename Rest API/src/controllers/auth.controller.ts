import { NextFunction, Request, Response } from "express";
import { messageErrorServer } from "../messages";
import jws from "jsonwebtoken";
import { prisma } from "..";
import argon2 from "argon2";
import { JWS_SECRET } from "../screts";
import { badRequest } from "../exeptions/bad.req";
import { codeError } from "../exeptions/root";

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, name, password } = req.body;
    let user = await prisma.users.findFirst({
      where: {
        email: email,
      },
    });
    if (user) {
      next(
        new badRequest("user already exists", codeError.USER_ALREADY_EXISTS)
      );
      return;
    }
    const hashPassword = await argon2.hash(password);
    user = await prisma.users.create({
      data: {
        email,
        name,
        password: hashPassword,
      },
    });
    res.json({
      isSuccess: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      isSuccess: false,
      message: messageErrorServer,
    });
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      next(new badRequest("user does not exists", codeError.USER_NOT_FOUND));
      return;
    }

    const isPassword = await argon2.verify(user.password, password);

    if (!isPassword) {
      res.status(401).json({
        isSuccess: false,
        message: "incorrect password",
      });
      return;
    }
    if (email !== user.email) {
      throw Error("incorrect email");
      return;
    }
    const token = jws.sign(
      {
        userId: user.id,
      },
      JWS_SECRET
    );

    res.json({
      isSuccess: true,
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      isSuccess: false,
      message: messageErrorServer,
    });
  }
};
