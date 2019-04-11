import React from "react";
import PropTypes from "prop-types";

export const Content = ({ Element, content }) => <Element>{content}</Element>;

Content.propTypes = {
  Element: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
