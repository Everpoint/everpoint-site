import React from "react";

import { getLink } from "./getLink";
import { GoNextLink } from "../../components/GoNextLink/GoNextLink";
import styles from "./styles";

export const AddressLink = ({ children, ...props }) => {
  return (
    <GoNextLink
      withArrow={false}
      href={getLink()}
      target="_blank"
      className={styles.addressLink}
      {...props}
    >
      {children}
    </GoNextLink>
  );
};
