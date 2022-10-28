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
exports.deleteList = exports.registerList = exports.sendEmail = exports.getListAdvertising = void 0;
const client_1 = require("@prisma/client");
const crypto_1 = __importDefault(require("crypto"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const prisma = new client_1.PrismaClient();
const getListAdvertising = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listAdvertising = yield prisma.advertisingList.findFirst({
            where: {
                subscription: true,
            },
            select: {
                name: true,
                userId: true,
                email: true,
            },
        });
        return listAdvertising;
    }
    catch (error) {
        console.log(error);
        return "No se ha podido tener la información del usuario";
    }
});
exports.getListAdvertising = getListAdvertising;
const sendEmail = (information) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "elmaik3121@gmail.com",
            pass: "prpvseguugbcannp",
        },
    });
    let mailOptions = {
        from: '"Bloom Api 👻"',
        to: `${information.email}`,
        subject: "Gran promoción ✔",
        text: "Hello world?",
        html: `"<b>Hello world? Codigo user${information.userid}</b>"`, // html body
    };
    console.log(information.email);
    let info = yield transporter.sendMail(mailOptions);
    console.log("Preview URL: %s", nodemailer_1.default.getTestMessageUrl(info));
});
exports.sendEmail = sendEmail;
const registerList = (registerlist) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.advertisingList.create({
            data: {
                id: crypto_1.default.randomBytes(5).toString("hex"),
                name: registerlist.name,
                email: registerlist.email,
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
const deleteList = (deleteList) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.advertisingList.update({
            where: {
                userId: deleteList.userid,
            },
            data: {
                subscription: false,
            },
        });
        return "the user has been successfully removed from the list";
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.deleteList = deleteList;
//# sourceMappingURL=advertising.service.js.map