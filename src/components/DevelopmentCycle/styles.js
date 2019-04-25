import styled from "astroturf";

export const Figure = styled("figure")`
  display: flex;
  padding: 4rem 0;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0;
  &.odd {
    justify-content: flex-end;
  }
  &:last-of-type {
    padding-bottom: 0;
    margin-bottom: 0;
  }
  @media (max-width: 1199px) {
    padding: 3.6rem 0;
  }
  @media (max-width: 991px) {
    justify-content: space-between;
    padding: 2rem 0;
    &.odd {
      justify-content: space-between;
    }
  }
`;

export const ImgContainer = styled("div")`
  position: relative;
  width: 34.2857rem;
  height: 25.7142rem;
  flex-grow: 1;
  flex-shrink: 0;
  @media (max-width: 1199px) {
    width: 25.7142rem;
    height: 19.2857rem;
  }
  @media (max-width: 991px) {
    width: 22.8571rem;
    height: 17.1428rem;
  }
  &.odd {
    order: 2;
  }
`;

export const Img = styled("img")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  max-width: none;
  max-height: 100%;
`;

export const Content = styled("div")`
  box-sizing: content-box;
  max-width: 32.1428rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 5.1428rem;
  @media (max-width: 1199px) {
    max-width: 27.4285rem;
    padding: 0 0 0 4.1428rem;
  }
  @media (max-width: 991px) {
    max-width: 24rem;
    padding: 0 1rem 0 2.6rem;
  }

  &.odd {
    order: 1;
    padding: 0 5.1428rem 0 0;
    @media (max-width: 1199px) {
      padding: 0 4.1428rem 0 0;
    }
    @media (max-width: 991px) {
      padding: 0 2.6rem 0 1rem;
    }
  }
`;

export const Title = styled("h2")`
  font-size: 1.4285rem;
  margin-bottom: 2rem;
  @media (max-width: 1199px) {
    font-size: 1.2857rem;
  }
  @media (max-width: 991px) {
    font-size: 1.1428rem;
    margin-bottom: 1.4rem;
  }
`;

export const Description = styled("p")`
  font-size: 1.2857rem;
  line-height: 1.33;
  margin-bottom: 1.8rem;
  &:last-of-type {
    margin-bottom: 0;
  }
  @media (max-width: 1199px) {
    font-size: 1.1428rem;
    line-height: 1.5;
  }
  @media (max-width: 991px) {
    font-size: 1rem;
    line-height: 1.43;
  }
`;
