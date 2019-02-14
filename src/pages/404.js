import React from "react";
import styled from "astroturf";

export const NotFoundPageContainer = styled("main")`
  text-align: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NotFoundPage = () => (
  <NotFoundPageContainer>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </NotFoundPageContainer>
);

export default NotFoundPage;
