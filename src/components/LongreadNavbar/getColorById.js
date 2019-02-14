import cn from "classnames";

import color from "./color";

export const getColorById = (id, fixed) => {
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
      return fixed ? cn(color.mobileMsp, color.mobileMspFixed) : color.mobileMsp;
    default:
      return fixed ? cn(color.defaultLight, color.defaultFixed) : color.defaultLight;
  }
};
