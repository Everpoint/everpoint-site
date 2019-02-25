import React, { Component } from "react";

import { MainLayoutConsumer } from "../components/MainLayoutProvider/MainLayoutProvider";

export default function(CustomComponent) {
  return class extends Component {
    render() {
      return (
        <MainLayoutConsumer>
          {props => <CustomComponent {...this.props} {...props} />}
        </MainLayoutConsumer>
      );
    }
  };
}
