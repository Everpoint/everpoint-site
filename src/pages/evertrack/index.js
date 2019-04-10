import React, { PureComponent } from "react";

import { routes } from '../../routes';
import { Header } from "../../components/PortfolioLongreadHeader/Header";
import { getProject } from "../../routes/utils";

import { EvergisContainer } from "../../styles/evertrack";

class Evertrack extends PureComponent {
  static defaultProps = {
    projectId: "evertrack",
  };

  render() {
    const { location, projectId } = this.props;
    const evertrack = getProject({ projectId, routes });

    return (
      <EvergisContainer>
        <Header routes={routes} projectId={projectId} location={location} {...evertrack} />
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

export default Evertrack;
