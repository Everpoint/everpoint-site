import React, { PureComponent } from "react";
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";

import { MainLayoutConsumer } from "../MainLayoutProvider/MainLayoutProvider";
import { MainTransitionContainer } from "../Main/MainTransitionContainer";
import { enterTimeout, exitTimeout } from "./animation";

export class PageTransition extends PureComponent {
  render() {
    const { children, location } = this.props;

    return (
      <MainLayoutConsumer>
        {({ onExited, disableTransition }) => (
          <TransitionGroup appear>
            <ReactTransition
              key={location.pathname}
              timeout={{
                enter: enterTimeout,
                exit: exitTimeout,
              }}
              onExited={onExited}
            >
              {status => (
                <MainTransitionContainer>
                  {React.cloneElement(children, { status, location, disableTransition })}
                </MainTransitionContainer>
              )}
            </ReactTransition>
          </TransitionGroup>
        )}
      </MainLayoutConsumer>
    );
  }
}
