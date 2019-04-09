import styled from "astroturf";

export const Row = styled("div")`
  font-size: 1.2857rem;
  display: flex;
  margin: 0 0 2.8571rem 0;
  @media (max-width: 991px) {
    font-size: 1.1428rem;
    margin: 0 0 1.8571rem 0;
  }
`;

export const ContactIcon = styled("div")`
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 0.6rem;
`;

export const Name = styled("div")`
  font-weight: bold;
  padding: 0 2rem 0 0;
  line-height: 1.33;
  width: calc(100% / 3);
  flex-shrink: 0;
`;

export const Value = styled("div")`
  &.isContacts {
    display: flex;
    flex-direction: column;
  }
  &.isSkills {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

export const Contact = styled("a")`
  color: #262c37;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 1.4rem;
  &.isField {
    font-size: 1.1428rem;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Badge = styled("div")`
  white-space: nowrap;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.15rem 0.6rem;
  color: #fff;
  border-radius: 1px;
  margin: 0 0.5rem 0.5rem 0;
  @media (max-width: 991px) {
    font-size: 0.8571rem;
    padding: 0 0.6rem;
  }
`;
