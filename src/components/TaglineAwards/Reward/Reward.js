import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Top1 } from "../../../assets/img/badges/top1.svg";
import { ReactComponent as Top3 } from "../../../assets/img/badges/top3.svg";
import { Figure, RightSide, Title, Description } from "./styles";

export const getBadgeFromPlace = place => {
  switch (place) {
    case 1:
      return <Top1 />;
    case 3:
      return <Top3 />;
    default:
      return null;
  }
};

export const Reward = ({ place, title, description }) => {
  return (
    <Figure>
      {getBadgeFromPlace(place)}
      <RightSide>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </RightSide>
    </Figure>
  );
};

Reward.propTypes = {
  place: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};
