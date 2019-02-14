import { css } from "astroturf";

const color = css`
  .defaultDark {
    a {
      color: rgba(38, 44, 55, 0.5);
      svg path {
        fill: rgba(38, 44, 55, 0.5);
        stroke: rgba(38, 44, 55, 0.5);
        opacity: 1;
      }
      @media (hover: hover) {
        &:hover {
          color: #262c37;
          svg {
            path {
              opacity: 1;
              fill: #262c37;
              stroke: #262c37;
            }
          }
        }
      }
    }
  }
  .defaultLight {
    a {
      color: rgba(255, 255, 255, 0.5);
      svg path {
        fill: rgba(255, 255, 255, 0.5);
        stroke: rgba(255, 255, 255, 0.5);
        opacity: 1;
      }
      @media (hover: hover) {
        &:hover {
          color: #fff;
          svg {
            path {
              opacity: 1;
              fill: #fff;
              stroke: #fff;
            }
          }
        }
      }
    }
  }
  .defaultFixed {
    a {
      color: #262c37;
      svg path {
        fill: #262c37;
        stroke: #262c37;
        opacity: 1;
      }
      @media (hover: hover) {
        &:hover {
          color: #90c53d;
          svg {
            path {
              fill: #90c53d;
              stroke: #90c53d;
            }
          }
        }
      }
    }
  }
  .mspFixed {
    a {
      @media (hover: hover) {
        &:hover {
          color: #4a90e2;
          svg {
            path {
              opacity: 1;
              fill: #4a90e2;
              stroke: #4a90e2;
            }
          }
        }
      }
    }
  }
  .geomonitoringFixed {
    a {
      @media (hover: hover) {
        &:hover {
          color: #009aeb;
          svg {
            path {
              fill: #009aeb;
              stroke: #009aeb;
            }
          }
        }
      }
    }
  }
  .evergisOnlineFixed {
    a {
      @media (hover: hover) {
        &:hover {
          color: #00aaff;
          svg {
            path {
              fill: #00aaff;
              stroke: #00aaff;
            }
          }
        }
      }
    }
  }
  .mobileMsp {
    a {
      color: rgba(10, 35, 66, 0.5);
      svg path {
        fill: rgba(10, 35, 66, 0.5);
        stroke: rgba(10, 35, 66, 0.5);
        opacity: 1;
      }
      @media (hover: hover) {
        &:hover {
          color: #0a2342;
          svg {
            path {
              opacity: 1;
              fill: #0a2342;
              stroke: #0a2342;
            }
          }
        }
      }
    }
  }
  .mobileMspFixed {
    a {
      @media (hover: hover) {
        &:hover {
          color: #67bcdc;
          svg {
            path {
              fill: #67bcdc;
              stroke: #67bcdc;
            }
          }
        }
      }
    }
  }
`;

export default color;
