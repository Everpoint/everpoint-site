import { browser } from "../../utils/browser";

export const getLink = () => {
  if (typeof window !== "object") {
    return null;
  }

  const { parsedResult } = browser();
  const { os } = parsedResult;
  const osName = os.name;

  if (osName === "Android") {
    return `geo:55.771287,37.624983`;
  } else {
    return "https://yandex.ua/maps/213/moscow/?lang=ru&ll=37.624983%2C55.771292&mode=search&oid=1219768762&ol=biz&sll=30.523460%2C50.450458&text=everpoint&z=17";
  }
};
