import React, { Component } from "react";

// import { ReactComponent as Earth } from "../assets/img/main-slides/earth.svg";
// import { CoveringImage } from "../components/CoveringImage/CoveringImage";
import { GoNextLink } from "../components/GoNextLink/GoNextLink";
import { Main } from "../components/MainPageElements/Main";
import { Background } from "../components/MainPageElements/Background";
import { Side, animation } from "../components/MainPageElements/Section";
import { HorizontalRule } from "../components/Typography/HorizontalRule";
import { MainLayoutConsumer } from "../components/MainLayoutProvider/MainLayoutProvider";

import styles, { Title } from "../styles/index";

export class IndexPage extends Component {
  render() {
    const { status, location, direction } = this.props;

    return (
      <Main>
        <Background className={styles.background} status={status} location={location} />
        {/*<CoveringImage>*/}
        {/*<Earth />*/}
        {/*</CoveringImage>*/}
        <Side className={animation(status, direction)}>
          <HorizontalRule />
          <Title>
            Геосервисы для <br /> принятия решений
          </Title>
          <GoNextLink to="/company" gatsby big>
            О компании
          </GoNextLink>
        </Side>
      </Main>
    );
  }
}

export default props => (
  <MainLayoutConsumer>
    {({ direction }) => <IndexPage direction={direction} {...props} />}
  </MainLayoutConsumer>
);
