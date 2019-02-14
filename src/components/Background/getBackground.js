import React from "react";

import styles from "./styles";
import { ReactComponent as Earth } from "../../assets/img/main-slides/earth.svg";

export const getSVGBackgroundByIndex = ({ isContactsPage, isAboutPage, ...props }) => {
  return <Earth {...props} />;
};

export const getBase64BackgroundByIndex = ({
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
