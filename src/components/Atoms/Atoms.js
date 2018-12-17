import styled from "astroturf";

export const large = "992px";
const tablet = "768px";
const middle = "576px";
const mobile = "320px";

export const H1 = styled("h1")`
  font-size: 3.4285rem;
  margin-bottom: 2.1428rem;
  @media (max-width: ${large}) {
    margin-bottom: 2rem;
  }
  @media (max-width: ${mobile}) {
    margin-bottom: 1rem;
  }
`;

export const H2 = styled("h2")`
  font-size: 3.4285rem;
  margin-bottom: 2.1428rem;
  @media (max-width: ${large}) {
    font-size: 2.2857rem;
    margin-bottom: 2rem;
  }
  @media (max-width: ${tablet}) {
    font-size: 1.7142rem;
  }
  @media (max-width: ${middle}) {
    font-size: 1.2857rem;
    margin-bottom: 1.4rem;
  }
  @media (max-width: ${mobile}) {
    margin-bottom: 1rem;
  }
`;

export const BigH1 = styled(H1)`
  font-size: 4.5714rem;
  @media (max-width: ${large}) {
    font-size: 3.4285rem;
  }
  @media (max-width: ${tablet}) {
    font-size: 2.5714rem;
  }
  @media (max-width: ${middle}) {
    font-size: 2.2857rem;
  }
  @media (max-width: ${mobile}) {
    font-size: 1.7142rem;
  }
`;

export const HorizontalRule = styled("hr")`
  text-align: left;
  width: 11.4285rem;
  height: 0.6428rem;
  margin-bottom: calc(2.4571rem - 0.6428rem);
  background: #90c53d;
  @media (max-width: ${large}) {
    height: 0.5714rem;
    margin-bottom: calc(2rem - 0.5714rem);
  }
  @media (max-width: ${middle}) {
    height: 0.2857rem;
    margin-bottom: calc(1.4571rem - 0.2857rem);
  }
`;

export const Link = styled("a")`
  display: block;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 1.2857rem;
  color: #262c37;
  font-weight: 500;
  font-style: normal;
  text-decoration: none;
  line-height: normal;
  &.isActive {
    color: #90c53d;
  }
  > span {
    white-space: nowrap;
    margin-left: 0.6rem;
    text-align: left;
    display: inline-block;
    width: 1.2rem;
    color: rgba(38, 44, 55, 0.35);
  }

  &.little {
    margin: 0.4rem 0 0 0.5rem;
    font-size: 0.8571rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${large}) {
    font-size: 1.1428rem;
  }
  @media (max-width: ${tablet}) {
    font-size: 1rem;
  }
  @media (max-width: ${middle}) {
    font-size: 0.8571rem;
  }
`;