import React, { Component } from "react";
import PropTypes from "prop-types";

import { Scrollbar } from "../../components/Scrollbar/Scrollbar";
import {
  DevelopmentContainer,
  DevelopmentItem,
  DevelopmentHeader,
  DevelopmentTitle,
  Year,
  Month,
  HorizontalRule,
  DevelopmentDescription,
} from "./styles";

export class Development extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    isMobile: PropTypes.bool,
  };

  static defaultProps = {
    items: [],
  };

  scrollbar = null;

  state = {
    sectionWidth: 330,
    padding: 30,
  };

  componentDidMount() {
    const { isMobile } = this.props;

    if (isMobile) {
      this.setState({
        sectionWidth: 244,
        padding: 20,
      });
    }
  }

  componentWillUnmount() {
    const { container } = this.props;

    container.removeEventListener("mousemove", this.onMouseMove);
  }

  componentDidUpdate({ container: prevContainer }, prevState) {
    const { container } = this.props;

    if (prevContainer !== container) {
      if (prevContainer) {
        prevContainer.removeEventListener("mousemove", this.onMouseMove);
      }

      if (container) {
        container.addEventListener("mousemove", this.onMouseMove);
      }
    }
  }

  onMouseMove = e => {
    if (this.scrollbar) {
      const { items } = this.props;
      const { sectionWidth, padding } = this.state;
      const offset = sectionWidth + padding;

      const containerWidth = items.length * sectionWidth + padding;
      const viewportWidth = this.scrollbar.size.container.width;
      const ratio = (containerWidth - viewportWidth) / (viewportWidth - offset);
      this.scrollbar.scrollTo((e.clientX - offset / 2) * ratio, 0, 0);
    }
  };

  onScrollbarRef = ref => {
    if (ref) {
      this.scrollbar = ref.scrollbar;
    }
  };

  render() {
    const { sectionWidth, padding } = this.state;
    const { items, isMobile } = this.props;

    return (
      <Scrollbar onScrollbarRef={this.onScrollbarRef}>
        <DevelopmentContainer style={{ width: items.length * sectionWidth + padding }}>
          {items.map(({ date, event }, index) => {
            const isMobileFirstChildPadding = isMobile ? 12 : 0;
            const firstChild = index === 0;
            const additional = firstChild ? padding + isMobileFirstChildPadding : 0;
            const [year, month] = date.split(" ");

            return (
              <DevelopmentItem
                key={`${date}-${index}`}
                style={{
                  width: sectionWidth + additional,
                  paddingRight: padding,
                  paddingLeft: additional,
                }}
              >
                <DevelopmentHeader>
                  <DevelopmentTitle>
                    <Year>{year}</Year> <Month>{month}</Month>
                  </DevelopmentTitle>
                  <HorizontalRule />
                </DevelopmentHeader>
                <DevelopmentDescription>{event}</DevelopmentDescription>
              </DevelopmentItem>
            );
          })}
        </DevelopmentContainer>
      </Scrollbar>
    );
  }
}
