import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import nodemailer from "nodemailer";
import {
  DeleteList,
  InfoEmail,
  MessageOption,
  RegisterListInterface,
} from "../interface/advertising.interface";

const prisma = new PrismaClient();

export const getListAdvertising = async () => {
  try {
    const listAdvertising = await prisma.advertisingList.findFirst({
      where: {
        subscription: true,
      },
      select: {
        name: true,
        userId: true,
        email: true,
      },
    });
    return listAdvertising;
  } catch (error) {
    console.log(error);
    return "No se ha podido tener la información del usuario";
  }
};

export const sendEmail = async (message: MessageOption) => {
  const emailGmail = `${process.env.EMAILGOOGLE}`;
  const passGmail = `${process.env.PASSGOOGLE}`;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: emailGmail,
      pass: passGmail,
    },
  });

  await transporter.sendMail(message);
};

export const registerList = async (
  registerlist: RegisterListInterface
): Promise<string | null> => {
  try {
    await prisma.advertisingList.create({
      data: {
        id: crypto.randomBytes(5).toString("hex"),
        name: registerlist.name,
        email: registerlist.email,
        userId: registerlist.userid,
        subscription: registerlist.subscription,
      },
    });
    return "The user has been successfully registered";
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteList = async (
  deleteList: DeleteList
): Promise<string | null> => {
  try {
    await prisma.advertisingList.update({
      where: {
        userId: deleteList.userid,
      },
      data: {
        subscription: false,
      },
    });
    return "the user has been successfully removed from the list";
  } catch (error) {
    console.log(error);
    return null;
  }
};
