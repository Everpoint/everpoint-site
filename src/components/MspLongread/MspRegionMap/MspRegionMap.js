import React from "react";
import PropTypes from "prop-types";

import { Paragraph } from '../../Typography/Paragraph';
import { Map } from "./Map";

import { MspRegionMapContainer, Achievement, AchievementContainer } from "./styles";

export const MspRegionMap = ({ achievements }) => (
  <MspRegionMapContainer>
    <Map />
    <AchievementContainer>
      {achievements.map(({ amount, icon, text }, index) => (
        <Achievement key={`achievement-${index}`}>
          <span style={{ backgroundImage: icon && `url(${icon})` }}>{amount}</span>
          <Paragraph>{text}</Paragraph>
        </Achievement>
      ))}
    </AchievementContainer>
  </MspRegionMapContainer>
);

MspRegionMap.propTypes = {
  achievements: PropTypes.arrayOf(PropTypes.object),
};
