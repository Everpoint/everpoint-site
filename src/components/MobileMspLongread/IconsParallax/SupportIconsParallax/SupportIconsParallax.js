import React, { Component } from "react";

import { IconsParallax } from "../IconsParallax";
import { ReactComponent as Ic1 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/support/ic-1.svg";
import { ReactComponent as Ic2 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/support/ic-2.svg";
import { ReactComponent as Ic3 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/support/ic-3.svg";
import { ReactComponent as Ic4 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/support/ic-4.svg";
import { ReactComponent as Ic5 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/support/ic-5.svg";
import { ReactComponent as Ic6 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/support/ic-6.svg";
import { ReactComponent as Ic7 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/support/ic-7.svg";
import { ReactComponent as Ic8 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/support/ic-8.svg";
import { ReactComponent as Ic9 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/support/ic-9.svg";
import { ReactComponent as Ic10 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/support/ic-10.svg";
import { ReactComponent as Ic11 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/support/ic-11.svg";
import styles from "./styles";
import { ParallaxContainer } from "../styles";

const icons = [Ic1, Ic2, Ic3, Ic5, Ic4, Ic6, Ic8, Ic7, Ic9, Ic10, Ic11];

export class SupportIconsParallax extends Component {
  render() {
    const { children } = this.props;
    return (
      <ParallaxContainer>
        <IconsParallax fill className={styles.supporticonsParallax} icons={icons} />
        {children}
      </ParallaxContainer>
    );
  }
}
