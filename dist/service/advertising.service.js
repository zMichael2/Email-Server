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
exports.registerList = void 0;
const client_1 = require("@prisma/client");
const crypto_1 = __importDefault(require("crypto"));
const prisma = new client_1.PrismaClient();
const registerList = (registerlist) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.advertisingList.create({
            data: {
                id: crypto_1.default.randomBytes(5).toString("hex"),
                name: registerlist.name,
                userId: registerlist.userid,
                subscription: registerlist.subscription,
            },
        });
        return "The user has been successfully registered";
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.registerList = registerList;
//# sourceMappingURL=advertising.service.js.map