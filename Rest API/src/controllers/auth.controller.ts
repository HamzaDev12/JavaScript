import { Request, Response } from "express";
import { messageErrorServer } from "../messages";
import jws from "jsonwebtoken";
import { prisma } from "..";
import argon2 from "argon2";
import { JWS_SECRET } from "../screts";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, name, password } = req.body;
    let user = await prisma.users.findFirst({
      where: {
        email: email,
      },
    });
    if (user) {
      throw Error("already exist");
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

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      throw Error("user does not exist");
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
