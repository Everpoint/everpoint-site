import React, { Component } from "react";
import styled from "astroturf";

import { Video } from "../../components/Video/Video";
import mobileVideo from "../../videos/mobileMsp/BN_mobile_3.mp4";

const DebugContainer = styled("div")`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #e0f0f6, #ffffff);
`;

export const VideoContainer = styled("div")`
  display: inline-block;
  position: relative;
  width: 17vw;
  height: calc(17vw * 2.1625);
`;

export const VideoBlock = styled(Video)`
  height: calc(100% + 2px);
  width: 100%;
  position: absolute;
  top: -1px;
  left: 0;
`;

export const Background = styled("div")`
  width: 132%;
  height: 114%;
  position: absolute;
  top: 53.74%;
  left: 45.2%;
  transform: translate(-50%, -50%);
  background-image: url(../../assets/img/portfolio/mobileMsp/mockUp/mockUp-Right.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
`;

class Debug extends Component {
  render() {
    return (
      <DebugContainer>
        <VideoContainer>
          <VideoBlock video={mobileVideo} />
          <Background />
        </VideoContainer>
      </DebugContainer>
    );
  }
}

export default Debug;
