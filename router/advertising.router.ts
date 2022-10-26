import { Router } from "express";
import {
  deleteListAdvertising,
  getAdvertising,
  getAdvertisingId,
  registerListAdvertising,
} from "../controllers/advertising.controllers";

const advertisingRouter = Router();

advertisingRouter.get("/", getAdvertising);
advertisingRouter.get("/:id", getAdvertisingId);
advertisingRouter.post("/", registerListAdvertising);
advertisingRouter.delete("/", deleteListAdvertising);

export default advertisingRouter;
