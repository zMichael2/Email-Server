import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import nodemailer from "nodemailer";
import {
  DeleteList,
  InfoEmail,
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

export const sendEmail = async (information: InfoEmail) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "elmaik3121@gmail.com",
      pass: "prpvseguugbcannp",
    },
  });
  let mailOptions = {
    from: '"Bloom Api 👻"',
    to: `${information.email}`,
    subject: "Gran promoción ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `"<b>Hello world? Codigo user${information.userid}</b>"`, // html body
  };
  console.log(information.email);

  let info = await transporter.sendMail(mailOptions);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

export const registerList = async (registerlist: RegisterListInterface) => {
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

export const deleteList = async (deleteList: DeleteList) => {
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
