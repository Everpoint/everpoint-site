import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import msp1x from "../../../assets/img/portfolio/mobileMsp/msp/460-x-0-w-1.png";
import msp2x from "../../../assets/img/portfolio/mobileMsp/msp/460-x-0-w-1@2x.png";
import msp3x from "../../../assets/img/portfolio/mobileMsp/msp/460-x-0-w-1@3x.png";

import support1 from "../../../assets/img/portfolio/mobileMsp/support/460-x-0-w-1.png";
import support2 from "../../../assets/img/portfolio/mobileMsp/support/460-x-0-w-1@2x.png";
import support3 from "../../../assets/img/portfolio/mobileMsp/support/460-x-0-w-1@3x.png";

import { SectionWithIconContainer, Section, Title, Content, Description } from "./styles";

export const msp = { x1: msp1x, x2: msp2x, x3: msp3x };

export const support = { x1: support1, x2: support2, x3: support3 };

export class SectionWithIcon extends PureComponent {
  static propTypes = {
    ratio: PropTypes.string,
  };

  render() {
    const { ratio } = this.props;

    return (
      <SectionWithIconContainer>
        <Section>
          <img src={msp[ratio]} alt="Бизес-навигатор МСП" />
          <Content>
            <Title as="h4">Бизес-навигатор МСП</Title>
            <Description as="p">
              Приложение по расчету бизнес-планов для предпринимателей и тех, кто мечтает открыть
              свое дело
            </Description>
          </Content>
        </Section>
        <Section>
          <img src={support[ratio]} alt="Меры поддержки" />
          <Content>
            <Title>Навигатор МСП. Меры поддержки</Title>
            <Description>
              Приложение для предпринимателей, которые ищут инструменты для развития своего бизнеса
            </Description>
          </Content>
        </Section>
      </SectionWithIconContainer>
    );
  }
}
