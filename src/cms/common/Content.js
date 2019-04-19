import React from "react";
import showdown from "showdown";

const converter = new showdown.Converter();

export const Content = ({ Element, content, ...props }) => <Element {...props}>{content}</Element>;

export const HTMLContent = ({ Element, content, ...props }) => (
  <Element dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} {...props} />
);
