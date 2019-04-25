import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { getPixelRatioPropName } from "../../utils/utils";
import { ImagesDownloadListener } from "../../components/ImagesDownloadListener/ImagesDownloadListener";
import { Figure, ImgContainer, Img, Content, Title, Description } from "./styles";
import { Separate } from "../Work/Separate/Separate";
import { backgrounds } from "../MainPageElements/Background";

export class DevelopmentCycle extends PureComponent {
  static propTypes = {
    odd: PropTypes.bool,
    offset: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.shape({
      x1: PropTypes.string,
      x2: PropTypes.string,
      x3: PropTypes.string,
    }),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  };

  state = {
    imgHeight: 360,
  };

  componentDidMount() {
    this.imageHeight();
  }

  imageHeight = () => {
    if (this.img) {
      const ratio = window.devicePixelRatio || 1;
      this.setState({
        imgHeight: this.img.naturalHeight / ratio,
      });
    }
  };

  onImgRef = img => {
    if (img) {
      this.img = img;
    }
  };

  render() {
    const { imgHeight } = this.state;
    const { odd, name, description, img, offset, Element } = this.props;
    const image = img[getPixelRatioPropName()];

    return (
      <>
        <Figure odd={odd}>
          <ImagesDownloadListener images={image} onLoad={() => this.imageHeight()} />
          <ImgContainer odd={odd}>
            <Img src={image} ref={this.onImgRef} style={{ height: imgHeight }} />
          </ImgContainer>
          <Content odd={odd}>
            <Title>{name}</Title>
            {Array.isArray(description) ? (
              description.map((item, index) => (
                <Description key={`description-${index}`}>{item}</Description>
              ))
            ) : (
              <Description>{description}</Description>
            )}
          </Content>
        </Figure>
        {Element && <Separate odd={odd} Element={Element} offset={offset} />}
      </>
    );
  }
}
