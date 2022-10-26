import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import { registerListInterface } from "../interface/advertising.interface";

const prisma = new PrismaClient();

export const registerList = async (registerlist: registerListInterface) => {
  try {
    await prisma.advertisingList.create({
      data: {
        id: crypto.randomBytes(5).toString("hex"),
        name: registerlist.name,
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
