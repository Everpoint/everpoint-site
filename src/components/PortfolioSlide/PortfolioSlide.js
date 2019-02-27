import React, { Component } from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";
import { Transition } from "react-transition-group";

import { getPixelRatioPropName } from "../../utils/utils";
import { ImagesDownloadListener } from "../../components/ImagesDownloadListener/ImagesDownloadListener";
import { Swiper } from "../../components/Swiper/Swiper";
import styles, { ContainerTransitionGroup, LongreadBackground } from "./styles";
import { TransitionSlide } from "./TransitionSlide";
import { PaginationSimple } from "../../components/Pagination/Simple/PaginationSimple";
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
    isSwipeEvent: PropTypes.bool,
    transitionEnd: PropTypes.bool,
    direction: PropTypes.number,
    lastSectionIndex: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.onResize = debounce(this.onResize, 200);
  }

  state = {
    id: null,
    goToLongread: false,
    ratio: "x1",
    images: [],

    // snapshot
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

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  componentDidUpdate({ transitionEnd: prevTransitionEnd }, prevState) {
    const { transitionEnd } = this.props;

    if (prevTransitionEnd !== transitionEnd && transitionEnd) {
      this.onResize();
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
    const { sections } = this.props;

    const ratio = getPixelRatioPropName();
    const images = [];

    sections.forEach(({ screenshots }) => {
      if (Array.isArray(screenshots)) {
        screenshots.forEach(item => images.push(item[ratio]));
      } else {
        images.push(screenshots[ratio]);
      }
    });

    this.setState({ ratio, images });
  };

  onSwiped = ({ isLeft, isRight, xRatio }) => {
    const { onSectionChange } = this.props;

    if (isLeft && xRatio > 25) {
      onSectionChange({ value: 1, isSwipeEvent: true });
    } else if (isRight && xRatio > 25) {
      onSectionChange({ value: -1, isSwipeEvent: true });
    }
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

  onPageChange = page => {
    const { selectedSectionIndex, onSectionChange } = this.props;
    if (page > selectedSectionIndex) {
      onSectionChange({ value: 1, isSwipeEvent: true });
    } else {
      onSectionChange({ value: -1, isSwipeEvent: true });
    }
  };

  render() {
    const { top, down, up, left, width, height, goToLongread, ratio, images } = this.state;
    const {
      projectBackgroundColor,
      selectedSectionIndex,
      sections,
      id,
      screenshots,
      isSwipeEvent,
      lastSectionIndex,
    } = this.props;

    const sectionImages = Array.isArray(screenshots)
      ? screenshots.map(img => img[ratio])
      : screenshots[ratio];

    return (
      <Swiper onSwiped={this.onSwiped} className={styles.swiper}>
        <ImagesDownloadListener images={images} />
        <ContainerTransitionGroup>
          <Transition
            key={`${id}-portfolio-slide-animation`}
            timeout={{
              enter: 0,
              exit: isSwipeEvent ? 200 : 400,
            }}
            onExited={this.onResize}
          >
            {status => (
              <TransitionSlide
                {...this.props}
                status={status}
                onContainerRef={this.onContainerRef}
                goToLongread={this.goToLongread}
                images={sectionImages}
                up={up}
                down={down}
              />
            )}
          </Transition>
        </ContainerTransitionGroup>
        <PaginationSimple
          pageCount={sections.length}
          currentPage={(lastSectionIndex || selectedSectionIndex) + 1}
          onPageChange={this.onPageChange}
        />
        {typeof window === "object" && (
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
      </Swiper>
    );
  }
}
