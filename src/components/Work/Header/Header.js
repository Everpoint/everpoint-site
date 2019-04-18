import React from "react";

import { OutsideLink } from "../../../components/OutsideLink/OutsideLink";
import { Section } from "../../../components/Elements/Section";
import { Article } from "../../../components/Elements/Article";

import photo from "../../../assets/img/team-members-photos/11.png";

import styles, {
  HeaderContainer,
  OverflowContainer,
  Photo,
  TitleContainer,
  Hr,
  Title,
  Description,
} from "./styles";

export const Header = ({ title }) => {
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
        Everpoint - это команда талантливых, целеустремлённых и ответственных людей, в которой
        каждый сотрудник нашел свое место. Мы занимаемся заказной разработкой геосервисов уже более
        15 лет, а с 2018 года развиваем и собственную веб-ГИС{" "}
        <OutsideLink className={styles.link}>EverGIS Online</OutsideLink> - бесплатный инструмент
        для работы с геоданными.
      </Description>
    </HeaderContainer>
  );
};
