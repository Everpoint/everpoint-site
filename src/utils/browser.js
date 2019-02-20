import Bowser from "bowser";

export const browser = () => {
  return Bowser.getParser(window.navigator.userAgent);
};

export const isMobile = () => {
  const { parsedResult } = browser();
  const {
    platform: { type },
  } = parsedResult;

  return type === "mobile";
};

export const isTablet = () => {
  const { parsedResult } = browser();
  const {
    platform: { type },
  } = parsedResult;

  return type === "tablet";
};
