import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

import { getPixelRatioPropName } from "../../utils/utils";
import { ImagesDownloadListener } from "../../components/ImagesDownloadListener/ImagesDownloadListener";
import { Swiper } from "../../components/Swiper/Swiper";
import { ContainerTransitionGroup, LongreadBackground } from "./styles";
import { TransitionSlide } from "./TransitionSlide";
import { PaginationSimple } from "../../components/Pagination/Simple/PaginationSimple";
import { Portal } from "../../components/Portal/Portal";

export class PortfolioSlide extends PureComponent {
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
    disableTransition: PropTypes.bool,
    isSwipeEvent: PropTypes.bool,
    scrollTop: PropTypes.number,
  };

  state = {
    goToLongread: false,
    top: 0,
    up: 0,
    down: 0,
    left: 0,
    width: 0,
    height: 0,
    ratio: "x1",
  };

  componentDidMount() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
    this.setState({ ratio: getPixelRatioPropName() });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  componentDidUpdate({ scrollTop: prevScrollTop }, prevState) {
    const { scrollTop } = this.props;

    if (prevScrollTop !== scrollTop) {
      this.onResize();
    }
  }

  onResize = () => {
    if (this.slide) {
      const { top, bottom, left, width, height } = this.slide.getBoundingClientRect();
      this.setState({
        top,
        left,
        width,
        height,
        up: top + height,
        down: window.innerHeight - bottom + height,
      });
    }
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
    const { top, down, up, left, width, height, goToLongread, ratio } = this.state;
    const {
      projectBackgroundColor,
      selectedSectionIndex,
      sections,
      id,
      screenshots,
      isSwipeEvent,
    } = this.props;

    const images = Array.isArray(screenshots)
      ? screenshots.map(img => img[ratio])
      : screenshots[ratio];

    return (
      <Swiper onSwiped={this.onSwiped}>
        <ImagesDownloadListener images={images} />
        <ContainerTransitionGroup>
          <Transition
            key={`${id}-portfolio-slide-animation`}
            timeout={{
              enter: 0,
              exit: isSwipeEvent ? 200 : 400,
            }}
          >
            {status => (
              <TransitionSlide
                status={status}
                onContainerRef={this.onContainerRef}
                goToLongread={this.goToLongread}
                images={images}
                up={up}
                down={down}
                {...this.props}
              />
            )}
          </Transition>
        </ContainerTransitionGroup>
        <PaginationSimple
          pageCount={sections.length}
          currentPage={selectedSectionIndex + 1}
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
