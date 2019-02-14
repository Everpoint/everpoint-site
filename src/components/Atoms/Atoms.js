import styled from "astroturf";
import { Link as GLink } from "gatsby";

export const Title = styled("a")`
  font-size: 1.2857rem;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  line-height: normal;
  @media (max-width: 1199px) {
    font-size: 1.1428rem;
  }
  @media (max-width: 991px) {
    font-size: 1rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 0.8571rem;
  }
`;

export const H2 = styled("h2")`
  line-height: normal;
  font-size: 3.4285rem;
  margin-bottom: 2.1428rem;
  @media (max-width: 1199px) {
    font-size: 2.2857rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 991px) {
    font-size: 1.7142rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 1.2857rem;
    margin-bottom: 1.4rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    margin-bottom: 1rem;
  }
`;

export const Link = styled(Title)`
  color: #262c37;
  display: block;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: color 200ms ease;
  @media (hover: hover) {
    &:hover {
      color: #90c53d;
    }
  }
  &.isActive {
    cursor: default;
    color: #90c53d;
    > span {
      cursor: default;
      color: #90c53d;
    }
  }

  &.little {
    margin: 0.4rem 0 0 0.5rem;
    font-size: 0.8571rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
  &.title {
    cursor: default;
    @media (hover: hover) {
      &:hover {
        color: #262c37;
      }
    }
    &.isActive {
      @media (hover: hover) {
        &:hover {
          color: #90c53d;
        }
      }
    }
  }
`;

export const GatsbyLink = styled(GLink)`
  font-size: 1.2857rem;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  color: #262c37;
  display: inline-block;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: color 200ms ease;
  @media (hover: hover) {
    &:hover {
      color: #90c53d;
    }
  }
  @media (max-width: 1199px) {
    font-size: 1.1428rem;
  }
  @media (max-width: 991px) {
    font-size: 1rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 0.8571rem;
  }
`;
