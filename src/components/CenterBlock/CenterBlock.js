import styled from "astroturf";

export const CenterBlock = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 940px) {
    width: 100%;
    height: 100%;
  }
`;
