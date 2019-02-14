import { browser } from "../../utils/browser";

export const iOSurl = (name, lat, lng) => {
  switch (name) {
    case "yandex":
      return `yandexmaps://maps.yandex.ru/?ll=${lng},${lat}`;
    case "google":
      return `comgooglemaps://?q=${lat},${lng}`;
    case "gis":
      return `dgis://2gis.ru/routeSearch/rsType/car/to/${lat},${lng}`;
    default:
      return `http://maps.google.com/?q=${lat},${lng}`;
  }
};

export const androidUrl = (name, lat, lng) => {
  switch (name) {
    case "yandex":
      return `yandexmaps://maps.yandex.ru/?ll=${lng},${lat}`;
    case "google":
      return `geo:${lat},${lng}`;
    case "gis":
      return `dgis://2gis.ru/routeSearch/rsType/car/to/${lat},${lng}`;
    default:
      return `http://maps.google.com/?q=${lat},${lng}`;
  }
};

export const desktopUrl = (name, lat, lng) => {
  switch (name) {
    case "yandex":
      return "https://yandex.ua/maps/213/moscow/?lang=ru&ll=37.624983%2C55.771292&mode=search&oid=1219768762&ol=biz&sll=30.523460%2C50.450458&text=everpoint&z=17";
    case "google":
      return "https://www.google.com/maps/place/%D0%A2%D1%80%D1%83%D0%B1%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB.,+25,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+127051/@55.7715213,37.624283,19z/data=!3m1!4b1!4m5!3m4!1s0x46b54a6956a3f747:0x114cf0f7a8eeef62!8m2!3d55.7715213!4d37.6248315";
    case "gis":
      return "https://2gis.ru/moscow/query/everpoint/firm/4504128909001284?queryState=center%2F37.624834%2C55.771287%2Fzoom%2F18";
    default:
      return `http://maps.google.com/?q=${lat},${lng}`;
  }
};

export const getLink = ({ name, lat, lng }) => {
  if (typeof window !== "object") {
    return null;
  }

  const { parsedResult } = browser();
  const { os } = parsedResult;
  const osName = os.name;

  if (osName === "iOS") {
    return iOSurl(name, lat, lng);
  } else if (osName === "Android") {
    return androidUrl(name, lat, lng);
  } else {
    return desktopUrl(name, lat, lng);
  }
};
