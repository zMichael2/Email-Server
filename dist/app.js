"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const advertising_router_1 = __importDefault(require("./router/advertising.router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const apiParhs = { advertising: "/api/advertising" };
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(apiParhs.advertising, advertising_router_1.default);
app.get("/", (req, res) => {
    res.json({ message: "Welcome to API Bloom", version: "1.0.0" });
});
app.listen(port, () => {
    console.log(`⚡️Servidor inicializado en el puerto ${port}`);
});
//# sourceMappingURL=app.js.map