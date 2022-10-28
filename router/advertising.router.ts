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
advertisingRouter.post("/", registerListAdvertising);
advertisingRouter.post("/notification", notificationAdvertising);
advertisingRouter.delete("/", deleteListAdvertising);

export default advertisingRouter;
