import React from "react";
import PropTypes from "prop-types";

import { getLink } from "./getLink";
import styles, { AdressLinkContainer, AdressLink, AdressLinkTitle } from "./styles";

export const AddressBtn = ({
  title,
  className,
  link,
  name,
  lat = "55.771287",
  lng = "37.624983",
}) => {
  return (
    <AdressLinkContainer className={className}>
      <AdressLink href={getLink({ name, lat, lng })} target="_blank" className={styles[name]} />
      <AdressLinkTitle>{title}</AdressLinkTitle>
    </AdressLinkContainer>
  );
};

AddressBtn.propTypes = {
  classname: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
};
