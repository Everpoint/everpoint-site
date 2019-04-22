import React from "react";
import showdown from "showdown";

const converter = new showdown.Converter();

export const Content = ({ Element, content, ...props }) =>
  Element ? <Element {...props}>{content}</Element> : <div {...props}>{content}</div>;

export const HTMLContent = ({ Element, content, ...props }) =>
  Element ? (
    <Element dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} {...props} />
  ) : (
    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} {...props} />
  );
