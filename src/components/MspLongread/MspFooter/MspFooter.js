import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Article } from "../../../components/Elements/Article";
import { H1 } from "../../Typography/Headlines";
import { GoNextLink } from "../../GoNextLink/GoNextLink";
import { AndroidStoreLink, IosStoreLink } from "../../StoreLinks/StoreLinks";
import phones from "../../../assets/img/portfolio/mobileMsp/phones.jpg";

import styles, { PhonesContainer, Phones, Footer, Content, StoreContainer } from "./styles";

export class MspFooter extends PureComponent {
  static propTypes = {
    ios: PropTypes.string,
    android: PropTypes.string,
    id: PropTypes.string,
  };

  render() {
    const { ios, android, id } = this.props;

    return (
      <Footer as="footer">
        <Article>
          <Content>
            <H1 portfolio>
              Бизнес-навигатор МСП <br /> в вашем телефоне!
            </H1>
            <GoNextLink to={`/${id}`} gatsby className={styles.goToMobileMspLink}>
              Подробнее
            </GoNextLink>
            <StoreContainer>
              <IosStoreLink href={ios} target="_blank" />
              <AndroidStoreLink href={android} target="_blank" />
            </StoreContainer>
          </Content>
        </Article>
        <PhonesContainer>
          <Phones src={phones} />
        </PhonesContainer>
      </Footer>
    );
  }
}
