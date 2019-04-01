import React from "react";
import PropTypes from "prop-types";

import { OutsideLink } from "../../../components/OutsideLink/OutsideLink";
import { format } from "../../../utils/date";
import styles, { Article, Title, Date, Description, Logo } from "./styles";

export const Card = ({ title, date, description, link, logo }) => {
  return (
    <Article>
      <Title>{title}</Title>
      <Date>{format(date)}</Date>
      <Description>{description}</Description>
      <OutsideLink className={styles.readMore} href={link}>
        Читать
      </OutsideLink>
      <Logo src={logo} alt="logo" />
    </Article>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
};
