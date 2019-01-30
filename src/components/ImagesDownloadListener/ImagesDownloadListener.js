import { Component } from "react";
import PropTypes from "prop-types";

export class ImagesDownloadListener extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
    onLoad: PropTypes.func,
    onError: PropTypes.func,
  };

  state = {
    loaded: false,
  };

  componentDidMount() {
    this.loadImages();
  }

  shouldComponentUpdate() {
    const { loaded } = this.state;

    return !loaded;
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

    images.forEach(imageSrc => promises.push(this.loadEachImage(imageSrc)));

    Promise.all(promises)
      .then(results => {
        this.setState(
          {
            loaded: true,
          },
          () => {
            onLoad && onLoad(results);
          },
        );
      })
      .catch(e => onError && onError(e));
  }

  render() {
    return null;
  }
}
