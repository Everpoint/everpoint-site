import React, { Component } from "react";

import { Helmet } from "../components/Helmet/Helmet";
import styles from "../styles/longread";

export class MobileMainLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <Helmet
          htmlAttributes={{
            class: styles.londreadHtmlMobile,
          }}
          bodyAttributes={{
            class: styles.londreadBodyMobile,
          }}
        />
        {children}
      </>
    );
  }
}
