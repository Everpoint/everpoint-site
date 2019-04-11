import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { OutsideLink } from "../../components/OutsideLink/OutsideLink";
import { getBackRouteByLocationPathName } from "../../routes/utils";
import { ScrollDownButton } from "../../components/Buttons/ScrollDownButton";
import { getLongreadNavbarHeight } from "../../components/LongreadNavbar/LongreadNavbar";
import { ScrollbarConsumer } from "../ScrollbarProvider/ScrollbarProvider";
import animation from "../../styles/animation";
import styles, {
  HeaderContainer,
  HeaderBlock,
  LeftSide,
  RightSide,
  Badge,
  Title,
  Description,
} from "./styles";
import { ImagesDownloadListener } from "../ImagesDownloadListener/ImagesDownloadListener";
import { animate, ease } from "../../utils/animate";

export class HeaderBase extends Component {
  static propTypes = {
    projectBackgroundColor: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    rightSide: PropTypes.element,
    scrollbar: PropTypes.object,
    leftSideClassName: PropTypes.string,
    containerClassName: PropTypes.string,
    leftSide: PropTypes.element,
    projectId: PropTypes.string,
    animate: PropTypes.bool,
    onLoad: PropTypes.func,
    images: PropTypes.arrayOf(PropTypes.string),
  };

  componentDidMount() {
    const { location, projectId, routes } = this.props;
    const replacedSlash = getBackRouteByLocationPathName(location.pathname, routes).replace(
      /\//g,
      "",
    );
    localStorage.setItem(replacedSlash, projectId);
  }

  shouldComponentUpdate(
    { scrollbar: nextScrollbar, animate: nextAnimate, nativeScrollbar: nextNativeScrollbar },
    nextState,
  ) {
    const { scrollbar, animate, nativeScrollbar } = this.props;

    return (
      scrollbar !== nextScrollbar ||
      animate !== nextAnimate ||
      nativeScrollbar !== nextNativeScrollbar
    );
  }

  onScrollDown = () => {
    const { scrollbar, nativeScrollbar } = this.props;
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const y = viewportHeight - getLongreadNavbarHeight() - window.pageYOffset;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const diff = viewportHeight - scrollTop - getLongreadNavbarHeight();

    if (nativeScrollbar) {
      animate({
        duration: 400,
        timing: ease,
        draw: progress => {
          window.scrollTo(0, scrollTop + diff * progress);
        },
      });
    } else if (scrollbar) {
      scrollbar.scrollTo(0, y, 400);
    }
  };

  render() {
    const {
      children,
      projectBackgroundColor,
      type,
      text,
      title,
      description,
      link,
      rightSide,
      leftSideClassName,
      rightSideClassName,
      containerClassName,
      leftSide,
      animate,
      onLoad,
      images,
    } = this.props;

    return (
      <HeaderContainer
        className={containerClassName}
        style={{ background: projectBackgroundColor }}
      >
        <ImagesDownloadListener images={images} onLoad={onLoad} />
        <HeaderBlock>
          <LeftSide
            animate={animate}
            className={cn({ [animation.fadeIn]: !images }, leftSideClassName)}
          >
            {type && <Badge>#{type}</Badge>}
            <Title>{title || text}</Title>
            <Description>{description}</Description>
            {link && (
              <OutsideLink className={styles.projectLink} href={link}>
                {link}
              </OutsideLink>
            )}
            {leftSide}
          </LeftSide>
          <RightSide className={rightSideClassName}>{rightSide}</RightSide>
          <ScrollDownButton className={styles.scrollDownButton} onClick={this.onScrollDown} />
        </HeaderBlock>
        {children}
      </HeaderContainer>
    );
  }
}

export const Header = props => (
  <ScrollbarConsumer>
    {({ scrollbar, nativeScrollbar }) => (
      <HeaderBase scrollbar={scrollbar} nativeScrollbar={nativeScrollbar} {...props} />
    )}
  </ScrollbarConsumer>
);
