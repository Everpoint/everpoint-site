import React from "react";
import styled from "astroturf";

import skylogo from "../../assets/img/icons/sky.png";

export const SkImg = styled("img")`
  width: 40px;
  height: 29px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImgWrapper = styled("div")`
  width: 40px;
  height: 22px;
  position: relative;
`;

export const Sk = () => (
  <ImgWrapper>
    <SkImg src={skylogo} alt="sky-logo" />
  </ImgWrapper>
);
