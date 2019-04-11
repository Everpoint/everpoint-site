import React from "react";
import PropTypes from "prop-types";

import telegram from "../../assets/img/vacancyIcons/telegram.svg";
import email from "../../assets/img/vacancyIcons/email.svg";
import { Row, Name, Value, ContactIcon, Contact, Badge } from "./styles";

const isSkills = value =>
  Array.isArray(value) && value.every(v => typeof v === "string" || v instanceof String);

const isContacts = value =>
  Array.isArray(value) && value.every(v => typeof v === "object" || v instanceof Object);

const skillColors = [
  "#c255d6",
  "#4b39c3",
  "#95da49",
  "#eeaf47",
  "#61dafb",
  "#1b64b9",
  "#4794a4",
  "#ffcf4f",
  "#387b4f",
  "#ff7c48",
];

export const getContactIconUrl = type => {
  switch (type) {
    case "telegram":
      return telegram;
    case "email":
      return email;
    default:
      return "";
  }
};

const getContactLink = (type, value) => {
  switch (type) {
    case "telegram":
      return `tg://resolve?domain=${value}`;
    case "email":
      return `mailto:${value}`;
    default:
      return "";
  }
};

const getValue = value => {
  if (isSkills(value)) {
    return value.slice(0, 10).map((skill, index) => (
      <Badge
        style={{
          backgroundColor: skillColors[index],
        }}
        key={`${skill}-${index}`}
      >
        {skill}
      </Badge>
    ));
  } else if (isContacts(value)) {
    return value.map(({ type, value: contactValue }, index) => {
      if (type === "telegram") {
        return null;
      }

      return (
        <Contact
          as={type === "name" ? "div" : "a"}
          key={`${type}-${index}`}
          href={getContactLink(type, contactValue)}
          isField={type !== "name"}
        >
          {type !== "name" && (
            <ContactIcon style={{ backgroundImage: `url(${getContactIconUrl(type)})` }} />
          )}
          {contactValue}
        </Contact>
      );
    });
  } else {
    return value;
  }
};

export const Field = ({ name, value }) => {
  return (
    <Row>
      <Name>{name}</Name>
      <Value isSkills={isSkills(value)} isContacts={isContacts(value)}>
        {getValue(value)}
      </Value>
    </Row>
  );
};

Field.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.object),
  ]),
};
