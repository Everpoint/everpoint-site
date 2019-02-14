import React, { Component } from "react";
import PropTypes from "prop-types";

import { ScrollbarConsumer } from "../../ScrollbarProvider/ScrollbarProvider";
import { Top1Container, LeftSide, RightSide } from "./styles";
import { ReactComponent as Left1 } from "../../../assets/img/portfolio/mobileMsp/icons/left-1.svg";
import { ReactComponent as Left2 } from "../../../assets/img/portfolio/mobileMsp/icons/left-2.svg";
import { ReactComponent as Left3 } from "../../../assets/img/portfolio/mobileMsp/icons/left-3.svg";
import { ReactComponent as Left4 } from "../../../assets/img/portfolio/mobileMsp/icons/left-4.svg";
import { ReactComponent as Right1 } from "../../../assets/img/portfolio/mobileMsp/icons/right-1.svg";
import { ReactComponent as Right2 } from "../../../assets/img/portfolio/mobileMsp/icons/right-2.svg";
import { ReactComponent as Right3 } from "../../../assets/img/portfolio/mobileMsp/icons/right-3.svg";
import { ReactComponent as Right4 } from "../../../assets/img/portfolio/mobileMsp/icons/right-4.svg";
import { ReactComponent as Badge } from "../../../assets/img/portfolio/mobileMsp/badge.svg";
import { halfPhone } from '../images';
import { isElementInViewport } from "../../../utils/dom";


class Top1Base extends Component {
  static propTypes = {
    scrollTop: PropTypes.number,
    ratio: PropTypes.string,
  };

  state = {
    isVisible: false,
  };

  componentDidUpdate({ scrollTop: prevScrollTop }, prevState) {
    const { scrollTop } = this.props;

    if (prevScrollTop !== scrollTop) {
      const isVisible = isElementInViewport({
        el: this.top1,
      });

      if (isVisible) {
        this.setState({ isVisible: true });
      }
    }
  }

  onRefTop1 = ref => {
    if (ref) {
      this.top1 = ref;
    }
  };

  render() {
    const { isVisible } = this.state;
    const { ratio } = this.props;

    return (
      <Top1Container ref={this.onRefTop1} isVisible={isVisible}>
        <LeftSide isVisible={isVisible}>
          <Left1 />
          <Left2 />
          <Left3 />
          <Left4 />
        </LeftSide>
        <RightSide isVisible={isVisible}>
          <Right1 />
          <Right2 />
          <Right3 />
          <Right4 />
        </RightSide>
        <img src={halfPhone[ratio]} alt="half phone" />
        <Badge />
      </Top1Container>
    );
  }
}

export const Top1 = props => (
  <ScrollbarConsumer>
    {({ scrollTop }) => <Top1Base scrollTop={scrollTop} {...props} />}
  </ScrollbarConsumer>
);
