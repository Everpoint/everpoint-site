import styled, { css } from "astroturf";

import { BigH1 } from "../components/Typography/Headlines";

export const Title = styled(BigH1)`
  @media (min-width: 1200px) {
    line-height: 1.1;
    font-size: 5.5714rem;
  }
`;

const styles = css`
  .background {
  }
`;

export default styles;
