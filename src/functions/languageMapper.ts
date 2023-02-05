import ENBostaLogo from "../imgs/bostaLogo.svg";
import ARBostaLogo from "../imgs/bostaARLogo.svg";
export const getActiveLanguage: { [key: string]: any } = {
  EN: {
    logo: ENBostaLogo,
    language: {
      shortcut: "EN",
      names: ["English", "Arabic"],
    },
    header: "Track your shipment",
    searchBarPlaceHolder: "Tracking No. ",
    shipmentNo: "Shipment No.",
    state: [
      { header: "Returned", paragraph: "Order is canceled and it will be returned back to the shipper" },
      { header: "Delivered", paragraph: "Your shipper requested a pickup. Bosta will pick it up soon" },
    ],
    log: "ACTIVITY LOG",
    dateUpdateFirst: "(Last update since ",
    dateUpdateSecond: "day ago.)",
    notFound:
      "No record of this tracking number can be found at this time, please check the number and try again later. For further assistance, please contact Customer Service.",
  },
  AR: {
    logo: ARBostaLogo,
    language: {
      shortcut: "عربي",
      names: ["اللغة العربة", "اللغة الانجليزية"],
    },
    header: "تتبع شحنتك",
    searchBarPlaceHolder: "رقم التتبع",
    shipmentNo: " رقم الشحنة ",
    state: [
      { header: "تم إرجاعه", paragraph: "تم إلغاء الأوردر وسوف يتم إرجاعه الي الراسل" },
      { header: "تم تسليم الأوردر", paragraph: "التاجر طلب استلام الشحنة, سنقوم بالاستلام قريبا" },
    ],
    log: "تفاصيل التتبع",
    dateUpdateFirst: "(اخر تحديث منذ",
    dateUpdateSecond: " يوم مضت.)",
    notFound:
      "لا يمكن العثور على أي سجل لرقم التتبع هذا في الوقت الحالي ، يرجى التحقق من الرقم والمحاولة مرة أخرى لاحقًا. لمزيد من المساعدة ، يرجى التواصل بخدمة العملاء.",
  },
};
