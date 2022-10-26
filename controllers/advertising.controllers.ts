import { Request, Response } from "express";
import crypto from "crypto";
import { registerList } from "../service/advertising.service";
import { registerListInterface } from "../interface/advertising.interface";

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

export const deleteListAdvertising = (req: Request, res: Response) => {};
