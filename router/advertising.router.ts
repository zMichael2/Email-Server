import { Router } from "express";
import {
  deleteListAdvertising,
  getAdvertising,
  getAdvertisingId,
  notificationAdvertising,
  registerListAdvertising,
} from "../controllers/advertising.controllers";

const advertisingRouter = Router();

advertisingRouter.get("/", getAdvertising);
advertisingRouter.get("/:id", getAdvertisingId);
advertisingRouter.get("/delete/:userid", deleteListAdvertising);
advertisingRouter.post("/", registerListAdvertising);
advertisingRouter.post("/notification", notificationAdvertising);

export default advertisingRouter;
