import { css } from "astroturf";

const styles = css`
  .typography {
    ul {
      padding: 0;
      list-style-position: outside;
      list-style-image: none;
      margin: 0 0 1.7142rem 0;

      li {
        font-size: 1.2857rem;
        line-height: normal;
        position: relative;
        list-style-type: none;
        padding-left: 4rem;
        margin-bottom: 1.64rem;

        &:before {
          width: 8px;
          height: 8px;
          top: 0.64rem;
          margin: 0 0 0 1.8rem;
          display: inline-block;
          position: absolute;
          left: 0;
          content: "";
          flex-shrink: 0;
          background-color: rgba(38, 44, 55, 0.25);
          border-radius: 50%;
        }

        &:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 1199px) {
          font-size: 1.1428rem;
          padding-left: 3rem;
          &:before {
            margin: 0 0 0 1rem;
            top: 0.54rem;
          }
        }
        @media (max-width: 991px) {
          font-size: 1rem;
          &:before {
            top: 0.44rem;
          }
        }
        @media (max-width: 812px) and (orientation: landscape),
          (max-width: 767px) and (orientation: portrait) {
          //font-size: 0.7142rem;
          &:before {
            top: 0.5rem;
            width: 6px;
            height: 6px;
          }
        }
        @media (max-width: 812px) and (orientation: landscape) {
          margin-bottom: 1rem;
        }

        @media (max-width: 767px) and (orientation: portrait) {
          margin-bottom: 0.6rem;
        }
      }
    }

    h1 {
      line-height: normal;
      font-size: 1.7142rem;
      @media (max-width: 1199px) {
        font-size: 1.4285rem;
      }
      @media (max-width: 991px) {
        font-size: 1.2857rem;
      }
      @media (max-width: 812px) and (orientation: landscape),
        (max-width: 767px) and (orientation: portrait) {
        font-size: 1.2857rem;
      }
    }

    h2 {
      font-size: 1.2857rem;
      line-height: 1.33;
      @media (max-width: 1199px) {
        font-size: 1.2857rem;
        line-height: 1.5;
      }
      @media (max-width: 991px) {
        font-size: 1rem;
        line-height: normal;
      }
    }

    p {
      font-size: 1.2857rem;
      line-height: 1.33;
      margin-bottom: 1.6rem;
      @media (max-width: 1199px) {
        line-height: 1.5;
        font-size: 1.1428rem;
      }
      @media (max-width: 991px) {
        font-size: 1rem;
        line-height: normal;
        margin-bottom: 1.2rem;
      }
    }
  }
`;

export default styles;
