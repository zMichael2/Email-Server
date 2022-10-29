import { MessageOption } from "../interface/advertising.interface";
import { htmlFacture } from "../resource/plantillaFacture";
import { htmlPromotion } from "../resource/plantillaPromotion";

export const maipOption = (
  type: string,
  email: string,
  userid: string
): MessageOption => {
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
        html: htmlPromotion(userid),
      });
      return mailOptions;
    case "facture":
      Object.assign(mailOptions, {
        subject: "Su factura ✔",
        html: htmlFacture(userid),
      });
      return mailOptions;
    default:
      return mailOptions;
  }
};

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
