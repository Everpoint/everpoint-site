import React from "react";
import styled from "astroturf";

import { getLink } from "./getLink";
import { Link } from "../../styles/contacts";

const AddressLinkStyled = styled(Link)`
  color: #90c53d !important;
  margin-bottom: 1.4285rem;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    margin-bottom: 0.6rem;
  }
`;

export const AddressLink = ({ children, ...props }) => {
  return (
    <AddressLinkStyled href={getLink()} target="_blank" {...props}>
      {children}
    </AddressLinkStyled>
  );
};
