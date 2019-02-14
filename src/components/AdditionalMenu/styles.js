import styled from "astroturf";

export const Menu = styled("menu")`
  display: flex;
  margin: 0;
  padding: 2.4rem 0 0 0;
  li {
    > a,
    > h4 {
      white-space: nowrap;
      font-size: 1rem;
    }
  }
  &.leftSide {
    padding: 0;
    display: block;
    > ul {
      margin-bottom: 3.9285rem;
      @media (max-width: 1024px) {
        margin-bottom: 2.8571rem;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    li {
      > a,
      h4 {
        white-space: normal;
        font-size: 1.4285rem;
        margin-bottom: 0;
        display: inline-block;
        @media (max-width: 1199px) {
          font-size: 1.1428rem;
        }
        @media (max-width: 991px) {
          font-size: 1rem;
        }
        @media (max-width: 812px) and (orientation: landscape) {
          font-size: 0.8571rem;
        }
      }
      > menu {
        > a {
          margin: 0.64rem 0 0 1rem;
          font-size: 1rem;
        }
      }
      @media (max-width: 940px) {
        margin-bottom: 0.6rem;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const MenuList = styled("ul")`
  margin: 0 2.8571rem 0 0;
  &:last-child {
    margin-right: 0;
  }
  > li {
    a {
      transition: color 200ms ease;
      @media (hover: hover) {
        &:hover {
          color: #90c53d;
        }
      }
    }
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0.4rem;
    > a {
      margin-bottom: 0;
    }
  }
`;

export const SecondLevelMenu = styled("menu")`
  margin: 0;
  padding: 0;
`;

export const ListHeader = styled("h2")`
  text-transform: uppercase;
  color: rgba(38, 44, 55, 0.25);
  font-size: 0.8571rem;
  margin-bottom: 2rem;
  font-weight: 600;
  line-height: normal;
`;
