import React from "react";
import PropTypes from "prop-types";

import { GoNextLink } from "../../../components/GoNextLink/GoNextLink";
import { Card, Screenshot, Content, ProjectName, Description } from "./styles";

export const ProjectCard = ({
  projectBackgroundColor,
  text,
  id,
  description,
  ratio,
  screenshots,
  navigate,
}) => {
  return (
    <Card
      onClick={() => navigate(`/${id}`)}
      style={{
        background: projectBackgroundColor,
      }}
    >
      <Screenshot src={screenshots[ratio]} mobileMsp={id === "mobileMsp"} />
      <Content>
        <ProjectName>{text}</ProjectName>
        <Description>
          {description ||
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, consequatur fugiat nam nemo nesciunt praesentium rerum."}
        </Description>
        <GoNextLink white>Подробнее</GoNextLink>
      </Content>
    </Card>
  );
};

ProjectCard.propTypes = {
  projectBackgroundColor: PropTypes.string,
  description: PropTypes.string,
  text: PropTypes.string,
  navigate: PropTypes.func,
  id: PropTypes.string,
};
