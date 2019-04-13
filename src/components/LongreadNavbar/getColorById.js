import cn from "classnames";

import color from "./color";

export const getColorById = ({ id: argId = "", fixed }) => {
  const id = argId.split("/")[1];
  switch (id) {
    case "evergisOnline":
      return fixed
        ? cn(color.defaultLight, color.defaultFixed, color.evergisOnlineFixed)
        : color.defaultLight;
    case "geomonitoring":
      return fixed
        ? cn(color.defaultLight, color.defaultFixed, color.geomonitoringFixed)
        : color.defaultLight;
    case "msp":
      return fixed
        ? cn(color.defaultLight, color.defaultFixed, color.mspFixed)
        : color.defaultLight;
    case "mobileMsp":
      return fixed
        ? cn(color.defaultLight, color.defaultFixed, color.mobileMspFixed)
        : color.defaultLight;
    case "vacancy":
      return fixed ? cn(color.defaultDark, color.defaultFixed) : color.defaultDark;
    case "work":
      return fixed ? cn(color.defaultDark, color.defaultFixed) : color.defaultLight;
    default:
      return fixed ? cn(color.defaultLight, color.defaultFixed) : color.defaultLight;
  }
};
