import React, { Component } from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";
import { Transition } from "react-transition-group";

import { ImagesDownloadListener } from "../../components/ImagesDownloadListener/ImagesDownloadListener";
import { ContainerTransitionGroup, LongreadBackground } from "./styles";
import { TransitionSlide } from "./TransitionSlide";
import { Portal } from "../../components/Portal/Portal";

export class PortfolioSlide extends Component {
  static propTypes = {
    projectBackgroundColor: PropTypes.string,
    text: PropTypes.string,
    description: PropTypes.string,
    screenshots: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
    id: PropTypes.string,
    onSectionChange: PropTypes.func,
    selectedSectionIndex: PropTypes.number,
    sections: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    parentTitle: PropTypes.string,
    sectionDirection: PropTypes.number,
    navigate: PropTypes.func,
    transitionEnd: PropTypes.bool,
    direction: PropTypes.number,
    lastSectionIndex: PropTypes.number,
    onExited: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.onResize = debounce(this.onResize, 200);
  }

  state = {
    id: null,
    goToLongread: false,
    images: [],

    top: 0,
    up: 0,
    down: 0,
    left: 0,
    width: 0,
    height: 0,
  };

  componentDidMount() {
    this.onResize();
    this.setImages();
    window.addEventListener("resize", this.onResize);
  }

  componentDidUpdate({ ratio: prevRatio }, prevState) {
    const { ratio } = this.props;
    if (prevRatio !== ratio) {
      this.setImages();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return this.getSlideBoundingClientRect();
  }

  componentDidUpdate({ transitionEnd: prevTransitionEnd }, prevState, snapshot) {
    const { transitionEnd } = this.props;

    if (prevTransitionEnd !== transitionEnd && transitionEnd) {
      this.setState(snapshot);
    }
  }

  onResize = () => this.setState(this.getSlideBoundingClientRect());

  getSlideBoundingClientRect = () => {
    if (this.slide) {
      const {
        top: topRect,
        left: leftRect,
        width,
        height,
        bottom,
      } = this.slide.getBoundingClientRect();

      const top = topRect + window.scrollY;
      const left = leftRect + window.scrollX;

      return {
        top: Math.round(top),
        left: Math.round(left),
        width: Math.round(width),
        height: Math.round(height),
        up: Math.round(top + height),
        down: Math.round(window.innerHeight - bottom + height),
      };
    }
  };

  setImages = () => {
    const { sections, ratio } = this.props;

    const images = [];

    sections.forEach(({ screenshots }) => {
      if (Array.isArray(screenshots)) {
        screenshots.forEach(item => images.push(item[ratio]));
      } else {
        images.push(screenshots[ratio]);
      }
    });

    this.setState({ images });
  };

  goToLongread = () => {
    const { navigate, id } = this.props;
    this.setState(
      {
        goToLongread: true,
      },
      () => {
        setTimeout(() => {
          navigate(`/${id}`);
        }, 200);
      },
    );
  };

  onContainerRef = ref => {
    if (ref) {
      this.slide = ref;
    }
  };

  render() {
    const { top, down, up, left, width, height, goToLongread, images } = this.state;
    const { projectBackgroundColor, id, screenshots, ratio } = this.props;

    const sectionImages = Array.isArray(screenshots)
      ? screenshots.map(img => img[ratio])
      : screenshots[ratio];

    return (
      <>
        <ImagesDownloadListener images={images} />
        <ContainerTransitionGroup>
          <Transition
            key={`${id}-portfolio-slide-animation`}
            timeout={{
              enter: 0,
              exit: 400,
            }}
          >
            {status => (
              <TransitionSlide
                {...this.props}
                status={status}
                onResize={this.onResize}
                onContainerRef={this.onContainerRef}
                goToLongread={this.goToLongread}
                images={sectionImages}
                up={up}
                down={down}
              />
            )}
          </Transition>
        </ContainerTransitionGroup>
        {typeof window !== "undefined" && (
          <Portal>
            <LongreadBackground
              goToLongread={goToLongread}
              style={{
                background: projectBackgroundColor,
                top: goToLongread ? 0 : top,
                left: goToLongread ? 0 : left,
                width: goToLongread ? "100vw" : width,
                height: goToLongread ? "100vh" : height,
              }}
            />
          </Portal>
        )}
      </>
    );
  }
}
