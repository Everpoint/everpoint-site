import Bowser from "bowser";

export const browser = () => {
  if (typeof window !== "object") {
    return;
  }

  return Bowser.getParser(window.navigator.userAgent);
};

export const isMobile = () => {
  if (typeof window !== "object") {
    return;
  }

  const { parsedResult } = browser();
  const {
    platform: { type },
  } = parsedResult;

  if (type === "mobile" || type === "tablet") {
    return true;
  } else {
    return false;
  }
};
