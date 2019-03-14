import styled from "astroturf";

export const Figure = styled("figure")`
  position: relative;
  display: flex;
  width: calc(100% / 3 + 2.2857rem / 2);
  align-items: center;
  margin: 0;
  padding: 0 2.2857rem 1rem 0;
  svg {
    flex-shrink: 0;
  }
  &:not(:last-of-type) {
    &:after {
      top: 50%;
      transform: translateY(-50%);
      right: 1.7142rem;
      position: absolute;
      content: "";
      width: 1px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.25);
    }
  }
  &:last-of-type {
    width: calc(100% / 3 - 2.2857rem);
  }
  @media (max-width: 1064px) {
    width: 20rem;
    &:last-of-type {
      width: 20rem;
    }
    &:after {
      display: none;
    }
  }
`;

export const RightSide = styled("div")`
  padding: 0 0 0 1rem;
`;

export const Title = styled("h4")`
  color: #e8d26d;
  font-weight: 600;
  margin-bottom: 0.4rem;
`;

export const Description = styled("div")`
  font-size: 0.8571rem;
`;
