import React from "react";
import PropTypes from "prop-types";
import showdown from "showdown";

const converter = new showdown.Converter();

export const Content = ({ Element, content, ...props }) => <Element {...props}>{content}</Element>;

export const HTMLContent = ({ Element, content, ...props }) => (
  <Element dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} {...props} />
);

HTMLContent.propTypes = Content.propTypes;

Content.propTypes = {
  Element: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
