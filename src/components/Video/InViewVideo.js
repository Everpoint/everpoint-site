import React, { Component } from "react";
import PropTypes from "prop-types";

import { getElementWidthAndHeight, isElementInViewport } from "../../utils/dom";
import { getLongreadNavbarHeight } from "../../components/LongreadNavbar/LongreadNavbar";
import { ScrollbarConsumer } from "../../components/ScrollbarProvider/ScrollbarProvider";
import { Video } from "./Video";

class InViewBase extends Component {
  static propTypes = {
    source: PropTypes.string,
    scrollTop: PropTypes.number,
  };

  state = {
    play: false,
  };

  componentDidMount() {
    this.checkInView();
  }

  componentDidUpdate({ scrollTop: prevScrollTop }, prevState) {
    const { scrollTop } = this.props;

    if (prevScrollTop !== scrollTop) {
      this.checkInView();
    }
  }

  checkInView = () => {
    const { play } = this.state;
    const offsetTop = getLongreadNavbarHeight();
    const video = this.video;

    if (video) {
      const viewportHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0,
      );

      const { height } = getElementWidthAndHeight(video);
      const { bottom } = video.getBoundingClientRect();
      const videoFullInView = isElementInViewport({ el: video, offsetTop });
      const videoOnTop = bottom < height / 2 + offsetTop;
      const videoOnBottom = bottom - viewportHeight > height / 2;

      if (videoFullInView && !play && !videoOnTop) {
        this.setState({
          play: true,
        });
      } else if ((videoOnTop || videoOnBottom) && play) {
        this.setState({
          play: false,
        });
      }
    }
  };

  onRef = ref => {
    if (ref) {
      this.video = ref;
    }
  };

  render() {
    const { play } = this.state;
    const { scrollTop, source, ...props } = this.props;

    return <Video play={play} video={source} onVideoRef={this.onRef} {...props} />;
  }
}

export const InViewVideo = props => (
  <ScrollbarConsumer>
    {({ scrollTop }) => <InViewBase scrollTop={scrollTop} {...props} />}
  </ScrollbarConsumer>
);
