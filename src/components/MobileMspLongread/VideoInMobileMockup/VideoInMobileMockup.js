import React, { Component } from "react";
import PropTypes from "prop-types";

import leftMockUp from "../../../assets/img/portfolio/mobileMsp/mockUp/mockUp-Left.png";
import rightMockUp from "../../../assets/img/portfolio/mobileMsp/mockUp/mockUp-Right.png";
import { InViewVideo } from "../../../components/Video/InViewVideo";
import { Container, MockUp } from "./styles";

export class VideoInMobileMockup extends Component {
  static propTypes = {
    ratio: PropTypes.string,
    mockUpLeft: PropTypes.bool,
    className: PropTypes.string,
  };

  render() {
    const { ratio, className, mockUpLeft, ...props } = this.props;

    return (
      <Container mockUpLeft={mockUpLeft} className={className}>
        <InViewVideo {...props} />
        <MockUp src={mockUpLeft ? leftMockUp : rightMockUp} alt="mockUp" />
      </Container>
    );
  }
}
