import React from "react";
import PropTypes from "prop-types";

import ContactsPage from "../../../pages/contacts";
import { Section } from "./styles";

export const Contacts = ({ onRef, titles }) => {
  return (
    <Section ref={onRef}>
      <ContactsPage titles={titles} />
    </Section>
  );
};

Contacts.propTypes = {
  onRef: PropTypes.func,
};
