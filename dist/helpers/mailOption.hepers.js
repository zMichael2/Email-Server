"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maipOption = void 0;
const plantillaFacture_1 = require("../resource/plantillaFacture");
const plantillaPromotion_1 = require("../resource/plantillaPromotion");
const maipOption = (type, email) => {
    let mailOptions = {
        from: '"Bloom Api 💄"<elmaik3121@gmail.com>',
        subject: "",
        html: "",
        to: `${email}`,
    };
    switch (type) {
        case "promotion":
            Object.assign(mailOptions, {
                subject: "Su promotion ✔",
                html: plantillaPromotion_1.htmlPromotion,
            });
            return mailOptions;
        case "facture":
            Object.assign(mailOptions, {
                subject: "Su factura ✔",
                html: plantillaFacture_1.htmlFacture,
            });
            return mailOptions;
        default:
            return mailOptions;
    }
};
exports.maipOption = maipOption;
// switch (type) {
//     case "promotion":
//       mailOptions = {
//         ...maipOption,
//         subject: "Gran promoción ✔",
//         html: "messageEmail",
//       };
//       return mailOptions;
//     case "facture":
//       mailOptions = {
//         ...maipOption,
//         subject: "Su factura ✔",
//         html: "htmlfacture",
//       };
//       return mailOptions;
//     default:
//       break;
//   }
//# sourceMappingURL=mailOption.hepers.js.map