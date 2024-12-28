import { Request, Response } from "express";
import { messageErrorServer } from "../messages";
import { prisma } from "..";
import argon2 from "argon2";

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
