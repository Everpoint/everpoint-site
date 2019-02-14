import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import throttle from "lodash/throttle";
import random from "lodash/random";

import { isMobile } from "../../utils/browser";
import { ImagesDownloadListener } from "../../components/ImagesDownloadListener/ImagesDownloadListener";
import { HorizontalRule } from "../../components/Typography/HorizontalRule";
import { CompanyPhotoTransition } from "./CompanyPhotoTransition";
import { CompanyPhotoContainer, CompanyHeader } from "./styles";

export class CompanyPhoto extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
  };

  constructor(props) {
    super(props);
    this.onResize = throttle(this.onResize, 100);
  }

  state = {
    visibleItems: [],
    hiddenItems: [],
    item: null,
  };

  componentDidMount() {
    if (isMobile()) {
      window.addEventListener("orientationchange", this.onResize);
    } else {
      window.addEventListener("resize", this.onResize);
    }

    this.onResize();
  }

  componentWillUnmount() {
    if (isMobile()) {
      window.removeEventListener("orientationchange", this.onResize);
    } else {
      window.removeEventListener("resize", this.onResize);
    }
    clearInterval(this.interval);
  }

  getNeededElements = () => {
    const viewportWidth = document.documentElement.clientWidth;

    if (viewportWidth <= 767) {
      return 6;
    } else if (viewportWidth <= 991) {
      return 12;
    } else {
      return 15;
    }
  };

  getRandomElements = sourceArray => {
    const neededElements = this.getNeededElements();
    const copyArray = sourceArray.slice();
    const shuffled = copyArray.sort(() => 0.5 - Math.random());

    return {
      visibleItems: shuffled.slice(0, neededElements),
      hiddenItems: shuffled.slice(neededElements),
    };
  };

  updatePhoto = () => {
    const { visibleItems, hiddenItems } = this.state;
    const newVisibleItems = visibleItems.slice();
    const newHiddenItems = hiddenItems.slice();
    const randomIndex = random(newVisibleItems.length - 1);
    const randomHiddenItemsElement = newHiddenItems.splice(random(newHiddenItems.length - 1), 1)[0];

    const randomVisibleItemsElement = newVisibleItems.splice(
      randomIndex,
      1,
      randomHiddenItemsElement,
    )[0];

    newHiddenItems.push(randomVisibleItemsElement);

    this.setState({
      visibleItems: newVisibleItems,
      hiddenItems: newHiddenItems,
      item: {
        prev: randomVisibleItemsElement,
        next: randomHiddenItemsElement,
      },
    });
  };

  onResize = () => {
    const { items } = this.props;

    this.setState({ ...this.getRandomElements(items) });
  };

  onAllAvatarsLoaded = () => {
    this.interval = setInterval(() => this.updatePhoto(), 2000);
  };

  render() {
    const { visibleItems, item } = this.state;
    const { title, items } = this.props;

    const avatars = items.map(({ avatar }) => avatar);

    return (
      <CompanyPhotoContainer>
        <ImagesDownloadListener images={avatars} onLoad={this.onAllAvatarsLoaded} />
        {title && (
          <CompanyHeader>
            <HorizontalRule />
            <h1>{title}</h1>
          </CompanyHeader>
        )}
        <CompanyPhotoTransition visibleItems={visibleItems} item={item} />
      </CompanyPhotoContainer>
    );
  }
}
