import React from "react";
import PropTypes from "prop-types";

import ContactsPage from "../../../pages/contacts";
import { Section, Blur } from "./styles";

export const Contacts = ({ onRef, titles }) => {
  return (
    <Section ref={onRef}>
      <Blur />
      <ContactsPage titles={titles} />
    </Section>
  );
};

Contacts.propTypes = {
  onRef: PropTypes.func,
};
