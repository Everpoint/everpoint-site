import React from "react";
import PropTypes from "prop-types";

import { OutsideLink } from "../../../components/OutsideLink/OutsideLink";
import styles, { Container, Logo, Title, PublishDate, Description } from "./styles";

export const Article = ({ date, description, link, logo, title }) => {
  return (
    <Container>
      <Logo src={logo} />
      <Title>{title}</Title>
      <PublishDate>{date}</PublishDate>
      <Description>{description}</Description>
      <OutsideLink href={link} className={styles.read}>
        Читать
      </OutsideLink>
    </Container>
  );
};

Article.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  logo: PropTypes.string,
  title: PropTypes.string,
};
