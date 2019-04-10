import React, { PureComponent } from "react";

import { routes } from '../../routes';
import { Header } from "../../components/PortfolioLongreadHeader/Header";
import { getProject } from "../../routes/utils";

import { EvergisContainer } from "../../styles/evergis";

class Evergis extends PureComponent {
  static defaultProps = {
    projectId: "evergis",
  };

  render() {
    const { location, projectId } = this.props;
    const evergis = getProject({ projectId, routes });

    return (
      <EvergisContainer>
        <Header projectId={projectId} location={location} routes={routes} {...evergis} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis
          consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur
          perferendis quae rem saepe sequi sit veniam, vero, vitae.
        </p>
      </EvergisContainer>
    );
  }
}

export default Evergis;
