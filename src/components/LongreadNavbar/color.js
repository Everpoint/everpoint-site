import { css } from "astroturf";

const color = css`
  .defaultDark {
    a,
    button {
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
    a,
    button {
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
    a,
    button {
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
    a,
    button {
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
    a,
    button {
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
    a,
    button {
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
  .mobileMspFixed {
    a,
    button {
      @media (hover: hover) {
        &:hover {
          color: #44c3f8;
          svg {
            path {
              fill: #44c3f8;
              stroke: #44c3f8;
            }
          }
        }
      }
    }
  }
`;

export default color;
