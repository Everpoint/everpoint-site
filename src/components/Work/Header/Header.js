import React from "react";

import { DefaultLink } from "../../../components/Typography/Links";
import { Section } from "../../../components/Elements/Section";
import { Article } from "../../../components/Elements/Article";

import photo from "../../../assets/img/team-members-photos/work.png";

import {
  HeaderContainer,
  OverflowContainer,
  Photo,
  TitleContainer,
  Hr,
  Title,
  Description,
} from "./styles";

export const Header = ({ title, onEGOclick }) => {
  return (
    <HeaderContainer>
      <OverflowContainer>
        <TitleContainer>
          <Section>
            <Article>
              <Hr />
              <Title>{title}</Title>
            </Article>
          </Section>
        </TitleContainer>
        <Photo src={photo} alt="photo" />
      </OverflowContainer>
      <Description>
        Everpoint — это команда талантливых, целеустремленных и ответственных людей, в которой
        каждый сотрудник нашел свое место. Уже более 15 лет мы разрабатываем геосервисы на заказ, а
        с 2018 года развиваем и собственную веб-ГИС{" "}
        <DefaultLink onClick={onEGOclick}>EverGIS Online</DefaultLink> — бесплатный инструмент для
        работы с геоданными.
      </Description>
    </HeaderContainer>
  );
};
