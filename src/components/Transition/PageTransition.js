import React, { PureComponent } from "react";
import { Transition as ReactTransition } from "react-transition-group";

import { MainTransitionGroup } from "./styled";
import { MainLayoutConsumer } from "../MainLayoutProvider/MainLayoutProvider";
import { MainTransitionContainer } from "../Main/MainTransitionContainer";
import { enterTimeout, exitTimeout } from "./animation";

export class PageTransition extends PureComponent {
  render() {
    const { children, location } = this.props;

    return (
      <MainLayoutConsumer>
        {({ onExited, onEnter }) => (
          <MainTransitionGroup>
            <ReactTransition
              key={location.pathname}
              timeout={{
                enter: enterTimeout,
                exit: exitTimeout,
              }}
              onEnter={onEnter}
              onExited={onExited}
            >
              {status => (
                <MainTransitionContainer>
                  {React.cloneElement(children, { status, location })}
                </MainTransitionContainer>
              )}
            </ReactTransition>
          </MainTransitionGroup>
        )}
      </MainLayoutConsumer>
    );
  }
}
