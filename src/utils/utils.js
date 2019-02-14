export const getPixelRatioPropName = () => {
  if (typeof window !== "object") {
    return;
  }

  const ratio = window.devicePixelRatio;
  if (ratio > 2) {
    return "x3";
  } else if (ratio > 1) {
    return "x2";
  } else {
    return "x1";
  }
};
