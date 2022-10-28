"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const advertising_controllers_1 = require("../controllers/advertising.controllers");
const advertisingRouter = (0, express_1.Router)();
advertisingRouter.get("/", advertising_controllers_1.getAdvertising);
advertisingRouter.get("/:id", advertising_controllers_1.getAdvertisingId);
advertisingRouter.post("/", advertising_controllers_1.registerListAdvertising);
advertisingRouter.post("/notification", advertising_controllers_1.notificationAdvertising);
advertisingRouter.delete("/", advertising_controllers_1.deleteListAdvertising);
exports.default = advertisingRouter;
//# sourceMappingURL=advertising.router.js.map