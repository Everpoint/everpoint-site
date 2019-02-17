import React from "react";

import { ReactComponent as Earth } from "../../assets/img/main-slides/earth.svg";
import russia from "../../assets/img/main-slides/russia.svg";
import moscow from "../../assets/img/main-slides/moscow.svg";
import bus from "../../assets/img/main-slides/bus.png";
import earth from "../../assets/img/main-slides/earth.svg";
import styles from "./styles";

export const preloadBgImages = [russia, moscow, bus, earth];

export const getSVGBackgroundByIndex = ({ isContactsPage, isAboutPage, ...props }) => {
  return <Earth {...props} />;
};

export const getBackground = ({ isPortfolioPage, isAboutPage, isJobsPage, isContactsPage }) => {
  if (isPortfolioPage() || isAboutPage()) return russia;
  else if (isJobsPage()) return moscow;
  else if (isContactsPage()) return bus;
  else return earth;
};

export const getBackgroundStyle = ({
  isPortfolioPage,
  isAboutPage,
  isJobsPage,
  isContactsPage,
}) => {
  if (isPortfolioPage() || isAboutPage()) return styles.europeRussia;
  else if (isJobsPage()) return styles.moscow;
  else if (isContactsPage()) return styles.bus;
  else return styles.earth;
};
