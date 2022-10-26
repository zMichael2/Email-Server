import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import {
  DeleteList,
  RegisterListInterface,
} from "../interface/advertising.interface";

const prisma = new PrismaClient();

export const registerList = async (registerlist: RegisterListInterface) => {
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
