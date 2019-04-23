import styled, { css } from "astroturf";

export const Viewport = styled("div")`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  border-radius: 0 0 4px 0;
  padding: 0 4px;
  font-size: 12px;
`;

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  position: relative;
  &.scrollable {
    height: auto;
  }
`;

export const Row = styled("div")`
  padding: 4.4rem;
`;

export const EmployeesContainer = styled("div")`
  margin-top: 4.4rem;
  width: 45.7142rem;
  > div:first-child {
    margin-bottom: 2.4rem;
  }
`;

const styles = css`
  .aboutBg {
    background-image: url(../assets/img/main-slides/russia.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .jobsBg {
    display: flex;
    align-items: center;
    background-image: url(../assets/img/main-slides/moscow.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export default styles;
