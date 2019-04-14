import styled, { css } from "astroturf";

export const WorkMain = styled("main")`
  padding-top: 8rem;
  @media (max-width: 1199px) {
    padding-top: 5rem;
  }
  @media (max-width: 991px) {
    padding-top: 5.4rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    padding-top: 3.4rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    padding-top: 10.8rem;
  }
`;

const styles = css`
  article.principleItemLongread {
    align-items: flex-start;
    flex-direction: row;
    width: calc(100% / 2 - 3.5714rem);
    margin: 0;
    height: auto;
  }
`;

export default styles;
