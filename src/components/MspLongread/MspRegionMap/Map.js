import React, { Component } from "react";
import PropTypes from "prop-types";

import { fillElementsInViewport } from "../../../utils/dom";
import { getLongreadNavbarHeight } from "../../LongreadNavbar/LongreadNavbar";
import { ScrollbarConsumer } from "../../ScrollbarProvider/ScrollbarProvider";
import { ReactComponent as SvgMap } from "../../../assets/img/portfolio/msp/RegionMapforBN.svg";
import styles, { MapWraper } from "./styles";

export class MapComponent extends Component {
  static propTypes = {
    scrollTop: PropTypes.number,
  };

  regions = 0;

  componentDidMount() {
    const wrapper = this.wrapper;

    if (wrapper) {
      const svg = wrapper.firstElementChild || wrapper.firstChild;
      const paths = svg.getElementsByTagName("path");
      const firstPath = paths[0];
      firstPath.classList.add(styles.isFull);
    }
  }

  componentDidUpdate({ scrollTop: prevScrollTop }, prevState) {
    const { scrollTop } = this.props;

    if (prevScrollTop !== scrollTop) {
      this.onFillMap();
    }
  }

  onFillMap = () => {
    const wrapper = this.wrapper;

    if (wrapper) {
      const navbarHeight = getLongreadNavbarHeight();
      const svg = wrapper.firstElementChild || wrapper.firstChild;
      const paths = svg.getElementsByTagName("path");

      const viewportHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0,
      );

      const regions = fillElementsInViewport({
        containerElement: svg,
        items: paths.length,
        offsetY: navbarHeight,
        viewportHeight,
      });

      if (this.regions !== regions) {
        const prevPath = paths[this.regions];
        const newPath = paths[regions];

        if (newPath) {
          newPath.classList.add(styles.isFull);
        }

        if (prevPath) {
          prevPath.classList.remove(styles.isFull);
        }
      }

      this.regions = regions;
    }
  };

  onMapRef = ref => {
    if (ref) {
      this.wrapper = ref;
    }
  };

  render() {

    return (
      <MapWraper ref={this.onMapRef}>
        <SvgMap />
      </MapWraper>
    );
  }
}

export const Map = () => (
  <ScrollbarConsumer>{({ scrollTop }) => <MapComponent scrollTop={scrollTop} />}</ScrollbarConsumer>
);
