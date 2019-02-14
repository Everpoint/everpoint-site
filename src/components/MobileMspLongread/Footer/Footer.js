import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { IosStoreLink, AndroidStoreLink } from "../../../components/StoreLinks/StoreLinks";
import { Article } from '../../../components/Elements/Article';
import {  H3 } from "../../../components/Typography/Headlines";
import { Paragraph } from '../../../components/Typography/Paragraph';
import { halfPhone, phoneRight } from "../images";

import { FooterContainer, Store, Mobiles, LeftSide, RightSide } from "./styles";

export class Footer extends PureComponent {
  static propTypes = {
    ratio: PropTypes.string,
    mobilePlatform: PropTypes.bool,
  };

  render() {
    const { ratio, mobilePlatform } = this.props;

    return (
      <FooterContainer>
        <Article>
          <Paragraph>
            Приложения «Бизнес-навигатор МСП» и «Навигатор МСП. Меры поддержки» помогают и
            начинающим, и опытным предпринимателям. Каждый клик по экрану смартфона приближает
            пользователя к осуществлению задуманного. Оба приложения можно бесплатно скачать в
            AppStore и GooglePlay.
          </Paragraph>
        </Article>
        <Mobiles>
          <LeftSide isMobilePlatform={mobilePlatform}>
            <Article>
              <H3>Бизнес-навигатор МСП</H3>
              <Store>
                <IosStoreLink />
                <AndroidStoreLink />
              </Store>
              <img src={halfPhone[ratio]} alt="phone-left" />
            </Article>
          </LeftSide>
          <RightSide isMobilePlatform={mobilePlatform}>
            <Article>
              <H3>НавигаторМСП. Меры поддержки</H3>
              <Store>
                <IosStoreLink />
                <AndroidStoreLink />
              </Store>
              <img src={phoneRight[ratio]} alt="phone-right" />
            </Article>
          </RightSide>
        </Mobiles>
      </FooterContainer>
    );
  }
}
