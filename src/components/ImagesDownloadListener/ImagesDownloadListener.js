import { Component } from "react";
import PropTypes from "prop-types";
import isEqual from "lodash/isEqual";

export class ImagesDownloadListener extends Component {
  static propTypes = {
    images: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
    onLoad: PropTypes.func,
    onError: PropTypes.func,
  };

  componentDidMount() {
    this.loadImages();
  }

  shouldComponentUpdate({ images: nextImages }, nextState) {
    const { images } = this.props;

    return !isEqual(images, nextImages);
  }

  componentDidUpdate({ images: prevImages }, prevState) {
    const { images } = this.props;
    if (!isEqual(prevImages, images)) {
      this.loadImages();
    }
  }

  loadEachImage(value) {
    return new Promise(resolve => {
      const img = new Image();
      img.src = value;
      img.onload = () => {
        resolve(value);
      };
      img.onerror = () => {
        console.error("failed to load ", value);
      };
    });
  }

  loadImages() {
    const { images, onLoad, onError } = this.props;
    const promises = [];

    if (!images) {
      onLoad && onLoad();
      return;
    }

    if (Array.isArray(images)) {
      images.forEach(imageSrc => promises.push(this.loadEachImage(imageSrc)));
    } else {
      promises.push(this.loadEachImage(images));
    }

    Promise.all(promises)
      .then(results => {
        onLoad && onLoad(results);
      })
      .catch(e => onError && onError(e));
  }

  render() {
    return null;
  }
}
