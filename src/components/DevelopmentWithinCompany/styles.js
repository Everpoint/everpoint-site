import styled from "astroturf";

export const Figure = styled("figure")`
  position: relative;
  width: 100%;
  max-width: 27.5714rem;
  margin-bottom: 4.5714rem;
  @media (max-width: 1199px) {
    max-width: 25.7142rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 991px) {
    max-width: 22.2857rem;
    margin-bottom: 1rem;
  }
`;

export const IconsBlock = styled("div")`
  top: 0;
  right: 0;
  width: 11.5714rem;
  height: 11.0714rem;
  position: absolute;
`;

const Icon = styled("div")`
  position: absolute;
  width: 4rem;
  height: 3.4rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const LeftIcon = styled(Icon)`
  top: 0;
  left: 0;
`;

export const RightIcon = styled(Icon)`
  top: 34%;
  right: 10%;
  transform: rotate(-54deg);
`;

export const BottomIcon = styled(Icon)`
  top: 73%;
  left: 14%;
  transform: rotate(-34deg);
  @media (min-width: 1200px) {
    display: none;
  }
`;

export const Title = styled("h2")`
  font-size: 1.4285rem;
  padding-top: 2.4rem;
  @media (max-width: 1199px) {
    font-size: 1.2857rem;
  }
  @media (max-width: 991px) {
    font-size: 1.1428rem;
  }
`;

export const Description = styled("p")`
  font-size: 1.1428rem;
  line-height: 1.5;
  margin-bottom: 0;
  @media (max-width: 991px) {
    font-size: 1rem;
    line-height: 1.43;
  }
`;
