import { Request, Response } from "express";
import crypto from "crypto";
import { deleteList, registerList } from "../service/advertising.service";

export const getAdvertising = (req: Request, res: Response) => {
  res.json({ message: "Hola" });
};

export const getAdvertisingId = (req: Request, res: Response) => {};

export const registerListAdvertising = async (req: Request, res: Response) => {
  const { name, subscription } = req.body;
  const userid = crypto.randomBytes(5).toString("hex");
  const register = await registerList({
    name: name,
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

export const deleteListAdvertising = async (req: Request, res: Response) => {
  const { userid } = req.body;
  const deleteuser = await deleteList({ userid: userid });

  if (!deleteuser) {
    return res.status(400).json({
      message: "Failed to delete user,",
    });
  }

  return res.status(200).json({
    message: deleteuser,
  });
};
