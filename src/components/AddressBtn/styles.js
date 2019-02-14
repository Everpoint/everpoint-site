import { css } from "astroturf";
import styled from "astroturf";

const styles = css`
  .yandex {
    background-image: url(../../assets/img/maps/yandex/yandex.jpg);
    @media (-webkit-min-device-pixel-ratio: 2) {
      background-image: url(../../assets/img/maps/yandex/yandex@2x.jpg);
    }
    @media (-webkit-min-device-pixel-ratio: 3) {
      background-image: url(../../assets/img/maps/yandex/yandex@3x.jpg);
    }
  }
  .google {
    background-image: url(../../assets/img/maps/google/google.jpg);
    @media (-webkit-min-device-pixel-ratio: 2) {
      background-image: url(../../assets/img/maps/google/google@2x.jpg);
    }
    @media (-webkit-min-device-pixel-ratio: 3) {
      background-image: url(../../assets/img/maps/google/google@3x.jpg);
    }
  }

  .gis {
    background-image: url(../../assets/img/maps/2gis/2gis.jpg);
    @media (-webkit-min-device-pixel-ratio: 2) {
      background-image: url(../../assets/img/maps/2gis/2gis@2x.jpg);
    }
    @media (-webkit-min-device-pixel-ratio: 3) {
      background-image: url(../../assets/img/maps/2gis/2gis@3x.jpg);
    }
  }
`;

export const AdressLinkContainer = styled("section")`
  text-align: center;
`;

export const AdressLink = styled("a")`
  display: inline-block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 4.5714rem;
  height: 4.5714rem;
  margin-bottom: 0.4rem;
`;

export const AdressLinkTitle = styled("h6")`
  font-size: 0.8571rem;
  font-weight: 400;
  margin-bottom: 0;
`;

export default styles;
