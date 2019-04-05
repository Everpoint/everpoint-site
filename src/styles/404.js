import styled, { css } from "astroturf";

import { Main } from "../components/MainPageElements/Main";

export const Main404 = styled(Main)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Article = styled("article")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  position: relative;
`;

export const Title = styled("h2")`
  font-weight: 600;
  margin: 4.5714rem 0 1rem 0;
`;

export const Description = styled("p")`
  font-size: 1.1428rem;
  margin-bottom: 0;
`;

const styles = css`
  .svg404 {
    max-width: 100%;
  }
`;

export default styles;