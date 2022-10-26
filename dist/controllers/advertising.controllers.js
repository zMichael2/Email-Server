"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteListAdvertising = exports.registerListAdvertising = exports.getAdvertisingId = exports.getAdvertising = void 0;
const crypto_1 = __importDefault(require("crypto"));
const advertising_service_1 = require("../service/advertising.service");
const getAdvertising = (req, res) => {
    res.json({ message: "Hola" });
};
exports.getAdvertising = getAdvertising;
const getAdvertisingId = (req, res) => { };
exports.getAdvertisingId = getAdvertisingId;
const registerListAdvertising = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, subscription } = req.body;
    const userid = crypto_1.default.randomBytes(5).toString("hex");
    const register = yield (0, advertising_service_1.registerList)({
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
});
exports.registerListAdvertising = registerListAdvertising;
const deleteListAdvertising = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userid } = req.body;
    const deleteuser = yield (0, advertising_service_1.deleteList)({ userid: userid });
    if (!deleteuser) {
        return res.status(400).json({
            message: "Failed to delete user,",
        });
    }
    return res.status(200).json({
        message: deleteuser,
    });
});
exports.deleteListAdvertising = deleteListAdvertising;
//# sourceMappingURL=advertising.controllers.js.map