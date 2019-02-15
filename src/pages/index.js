import React, { PureComponent } from "react";

import { GoNextLink } from "../components/GoNextLink/GoNextLink";
import { MainAnimation } from "../components/MainAnimation/MainAnimation";
import { HorizontalRule } from "../components/Typography/HorizontalRule";
import { BigH1 } from "../components/Typography/Headlines";

import styles from "../styles/index";

export class IndexPage extends PureComponent {
  render() {
    return (
      <MainAnimation
        {...this.props}
        withSvg
        containerClassName={styles.indexContainer}
        leftSide={
          <>
            <HorizontalRule />
            <BigH1>
              Геосервисы для <br /> принятия решений
            </BigH1>
            <GoNextLink to="/company" gatsby big>
              О компании
            </GoNextLink>
          </>
        }
      />
    );
  }
}

export default IndexPage;
