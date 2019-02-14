import React from "react";
import cn from "classnames";

import { NoVacancyCard } from "../../components/TeamMembers/NoVacancyCard";
import { getVacancyAvatarByType } from "../../components/TeamMembers/getVacancyAvatarByType";
import { HowWeAreWorking } from "../../components/HowWeAreWorking/HowWeAreWorking";
import { TeamMemberCard } from "../../components/TeamMemberCard/TeamMemberCard";
import styles, { PhotoContainer } from "../../components/TeamMembers/styles";
import { GoNextLink } from "../GoNextLink/GoNextLink";

export const Card = props => {
  const { id, card, className, items } = props;
  const { photo, type, avatar } = card;

  if (id === "vacancy" && items.length === 0) {
    return <NoVacancyCard />;
  }

  switch (id) {
    case "employees":
    case "vacancy":
      return (
        <TeamMemberCard
          {...card}
          className={cn(className, { [styles.vacancyCard]: id === "vacancy" })}
          control={id === "vacancy" ? <GoNextLink>Описание вакансии</GoNextLink> : null}
          avatar={type ? getVacancyAvatarByType(type) : avatar}
        />
      );
    case "photo":
      return (
        <PhotoContainer className={className}>
          <img src={photo} alt="" />
        </PhotoContainer>
      );
    case "process":
      return <HowWeAreWorking className={className} />;
    default:
      return null;
  }
};
