import React from "react";
import PropTypes from "prop-types";

import { getRouteById } from "../../../routes";
import { ProjectCard } from "./ProjectCard";
import { PaddingBlock, CardContainer } from "../styles";
import { Section, Title } from "./styles";

export const Portfolio = ({ onRef, ratio, navigate }) => {
  const { text, sections } = getRouteById("portfolio");

  return (
    <Section ref={onRef}>
      <Title>{text}</Title>
      <CardContainer>
        {sections.map((project, index, array) => (
          <React.Fragment key={project.id}>
            <ProjectCard ratio={ratio} navigate={navigate} {...project} />
            {array.length - 1 === index && <PaddingBlock />}
          </React.Fragment>
        ))}
      </CardContainer>
    </Section>
  );
};

Portfolio.propTypes = {
  component: PropTypes.bool,
};
