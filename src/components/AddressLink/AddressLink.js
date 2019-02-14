import React from "react";
import styled from "astroturf";

import { getLink } from "./getLink";
import { Link } from "../../styles/contacts";

const AddressLinkStyled = styled(Link)`
  color: #90c53d !important;
  margin-bottom: 1.4285rem;
  @media (max-width: 812px) and (max-height: 275px) and (orientation: landscape),
    only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
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
