import React from "react";
import PropTypes from "prop-types";

import { Avatar } from "../../components/Avatar/Avatar";
import styles, {
  TeamMemberCardContainer,
  VacancyAvatar,
  Name,
  Position,
  Description,
} from "./styles";

export const TeamMemberCard = ({
  avatar,
  height,
  top,
  margin,
  withMarginTop,
  name,
  position,
  description,
  control,
  className,
  vacancy,
}) => {
  return (
    <TeamMemberCardContainer
      className={className}
      vacancy={vacancy}
      style={{ height, marginBottom: margin, marginTop: withMarginTop && top }}
    >
      {vacancy ? (
        <VacancyAvatar style={{ backgroundImage: `url(${avatar})` }} />
      ) : (
        <Avatar source={avatar} className={styles.avatarBlock} />
      )}
      <Name
        vacancy={vacancy}
        dangerouslySetInnerHTML={{
          __html: name,
        }}
      />
      {control}
      {position && <Position>{position}</Position>}
      {description && <Description>{description}</Description>}
    </TeamMemberCardContainer>
  );
};

TeamMemberCard.propTypes = {
  className: PropTypes.string,
  vacancy: PropTypes.bool,
  name: PropTypes.string,
  position: PropTypes.string,
  withMarginTop: PropTypes.bool,
  height: PropTypes.number,
  top: PropTypes.number,
  margin: PropTypes.number,
  control: PropTypes.element,
};
