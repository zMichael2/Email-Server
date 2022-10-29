import { Request, Response } from "express";
import crypto from "crypto";
import {
  deleteList,
  getListAdvertising,
  registerList,
  sendEmail,
} from "../service/advertising.service";
import { maipOption } from "../helpers/mailOption.hepers";

export const getAdvertising = (req: Request, res: Response) => {
  res.json({ message: "Hola" });
};

export const getAdvertisingId = (req: Request, res: Response) => {};

export const registerListAdvertising = async (req: Request, res: Response) => {
  const { name, subscription, email } = req.body;
  const userid = crypto.randomBytes(5).toString("hex");
  const register = await registerList({
    name: name,
    email: email,
    userid: userid,
    subscription: subscription,
  });
  if (!register) {
    return res.status(400).json({
      message: "Failed to register user",
    });
  }
  res.status(200).json({ message: register });
};
export const notificationAdvertising = async (req: Request, res: Response) => {
  const { name, email, userid, type } = req.body;
  //const data = await getListAdvertising();
  const message = maipOption(type, email, userid);
  await sendEmail(message);

  res.status(200).json({ message: "Se ha enviado el correo correctamente" });
};

export const deleteListAdvertising = async (req: Request, res: Response) => {
  const { userid } = req.params;
  const deleteuser = await deleteList({ userid: userid });

  if (!deleteuser) {
    return res.status(400).json({
      message: "Failed to delete user,",
    });
  }

  return res.status(200).send("delete");
};
