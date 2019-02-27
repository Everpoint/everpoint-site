import React, { PureComponent } from "react";

// import { ReactComponent as Earth } from "../assets/img/main-slides/earth.svg";
// import { CoveringImage } from "../components/CoveringImage/CoveringImage";
import { GoNextLink } from "../components/GoNextLink/GoNextLink";
import { Main } from "../components/MainPageElements/Main";
import { Background } from "../components/MainPageElements/Background";
import { Side, animation } from "../components/MainPageElements/Section";
import { HorizontalRule } from "../components/Typography/HorizontalRule";
import { BigH1 } from "../components/Typography/Headlines";

import styles from "../styles/index";

export class IndexPage extends PureComponent {
  render() {
    const { status, location } = this.props;

    return (
      <Main>
        <Background className={styles.background} status={status} location={location} />
        {/*<CoveringImage>*/}
        {/*<Earth />*/}
        {/*</CoveringImage>*/}
        <Side className={animation(status)}>
          <HorizontalRule />
          <BigH1>
            Геосервисы для <br /> принятия решений
          </BigH1>
          <GoNextLink to="/company" gatsby big>
            О компании
          </GoNextLink>
        </Side>
      </Main>
    );
  }
}

export default IndexPage;
