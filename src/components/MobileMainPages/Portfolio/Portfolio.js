import React from "react";
import PropTypes from "prop-types";

import { getRouteById } from "../../../routes/utils";
import { ProjectCard } from "./ProjectCard";
import { PaddingBlock, XScrollContainer } from "../styles";
import { Section, Title } from "./styles";

export const Portfolio = ({ onRef, ratio, navigate, routes }) => {
  const { text, sections } = getRouteById("portfolio", routes);

  return (
    <Section ref={onRef}>
      <Title>{text}</Title>
      <XScrollContainer>
        {sections.map((project, index, array) => (
          <React.Fragment key={project.id}>
            <ProjectCard ratio={ratio} navigate={navigate} {...project} />
            {array.length - 1 === index && <PaddingBlock />}
          </React.Fragment>
        ))}
      </XScrollContainer>
    </Section>
  );
};

Portfolio.propTypes = {
  component: PropTypes.bool,
};
