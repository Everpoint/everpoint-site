import React, { Component } from "react";
import PropTypes from "prop-types";

import left1 from "../../../assets/img/portfolio/msp/analytics/left-1@2x.png";
import left2 from "../../../assets/img/portfolio/msp/analytics/left-2@2x.png";
import left3 from "../../../assets/img/portfolio/msp/analytics/left-3@2x.png";
import left4 from "../../../assets/img/portfolio/msp/analytics/left-4@2x.png";

import right1 from "../../../assets/img/portfolio/msp/analytics/right-1@2x.png";
import right2 from "../../../assets/img/portfolio/msp/analytics/right-2@2x.png";
import right3 from "../../../assets/img/portfolio/msp/analytics/right-3@2x.png";
import right4 from "../../../assets/img/portfolio/msp/analytics/right-4@2x.png";

import { isElementInViewport } from "../../../utils/dom";
import styles, { Step } from "../../../styles/msp";
import { MspAnalyticsCardsLeftSide, MspAnalyticsCardsRightSide } from "./styles";
import { Article } from "../../../components/Elements/Article";
import { Section } from "../../../components/Elements/Section";
import { Paragraph } from "../../Typography/Paragraph";
import { ScrollbarConsumer } from "../../ScrollbarProvider/ScrollbarProvider";

export class MspAnalyticsSectionBase extends Component {
  static propTypes = {
    scrollTop: PropTypes.number,
  };

  state = {
    isVisible: false,
  };

  componentDidUpdate({ scrollTop: prevScrollTop }, prevState) {
    const { scrollTop } = this.props;

    if (prevScrollTop !== scrollTop) {
      const isVisible = isElementInViewport({
        el: this.container,
        offsetY: this.container.getBoundingClientRect().height / 2,
      });

      if (isVisible) {
        this.setState({ isVisible: true });
      }
    }
  }

  onRef = ref => {
    if (ref) {
      this.container = ref;
    }
  };

  render() {
    const { isVisible } = this.state;

    return (
      <Section className={styles.analyticSection} ref={this.onRef}>
        <Article>
          <Step withoutMarginTop>Аналитика «Бизнес-навигатора МСП»</Step>
          <Paragraph>
            Пользователь может ознакомиться с подробной аналитикой товаров и услуг по регионам и
            отраслям. Аналитика представлена в виде простых графиков и диаграмм, отражающих данные
            панельных и маркетинговых исследований потребительских предпочтений по 1 200 товарам и
            293 услугам в разных территориальных разрезах.
          </Paragraph>
          <MspAnalyticsCardsLeftSide isVisible={isVisible}>
            <img src={left4} alt="left-4" />
            <img src={left1} alt="left-1" />
            <img src={left2} alt="left-2" />
            <img src={left3} alt="left-3" />
          </MspAnalyticsCardsLeftSide>
          <MspAnalyticsCardsRightSide isVisible={isVisible}>
            <img src={right1} alt="right-1" />
            <img src={right4} alt="right-4" />
            <img src={right3} alt="right-3" />
            <img src={right2} alt="right-2" />
          </MspAnalyticsCardsRightSide>
        </Article>
      </Section>
    );
  }
}

export const MspAnalyticsSection = () => (
  <ScrollbarConsumer>
    {({ scrollTop }) => <MspAnalyticsSectionBase scrollTop={scrollTop} />}
  </ScrollbarConsumer>
);
