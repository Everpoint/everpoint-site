import styled from "astroturf";

export const DevelopmentContainer = styled("div")`
  display: flex;
  margin-bottom: 9.2857rem;
  @media (max-width: 1199px) {
    margin-bottom: 6rem;
  }
  @media (max-width: 991px) {
    margin-bottom: 3.6rem;
    margin-left: 0.9rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    margin-bottom: 2rem;
    margin-left: 1.2rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    margin-left: -0.8rem;
    margin-bottom: 1.8rem;
  }
`;

export const DevelopmentItem = styled("div")`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
`;

export const DevelopmentHeader = styled("header")`
  display: flex;
`;

export const DevelopmentTitle = styled("div")`
  font-size: 1.7142rem;
  height: 1.7142rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: normal;
  white-space: nowrap;
  padding: 0.145rem 0.925rem 0.145rem 0;
  font-weight: bold;
  border-radius: 0.8571rem;
  margin-bottom: 1.4285rem;
  @media (max-width: 991px) {
    height: 1.5rem;
    font-size: 1.4285rem;
    padding: 0 0.925rem 0.145rem 0;
    margin-bottom: 0.8rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 1.1428rem;
  }
`;

export const Year = styled("span")`
  color: rgba(38, 44, 55, 0.25);
  &:after {
    content: " ";
    white-space: pre;
  }
`;

export const Month = styled("span")`
  color: rgba(38, 44, 55, 0.1);
`;

export const HorizontalRule = styled("hr")`
  margin-top: 0.9rem;
  height: 0.1428rem;
  width: 100%;
  background-color: rgba(38, 44, 55, 0.1);
`;

export const DevelopmentDescription = styled("p")`
  margin: 0;
  line-height: normal;
  @media (max-width: 991px) {
    font-size: 0.8571rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 0.7142rem;
  }
`;
