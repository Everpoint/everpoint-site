import React, { Component } from "react";

import { IconsParallax } from "../IconsParallax";
import { ReactComponent as Ic1 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/bn/ic-1.svg";
import { ReactComponent as Ic2 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/bn/ic-2.svg";
import { ReactComponent as Ic3 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/bn/ic-3.svg";
import { ReactComponent as Ic4 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/bn/ic-4.svg";
import { ReactComponent as Ic5 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/bn/ic-5.svg";
import { ReactComponent as Ic7 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/bn/ic-7.svg";
import { ReactComponent as Ic8 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/bn/ic-8.svg";
import { ReactComponent as Ic9 } from "../../../../assets/img/portfolio/mobileMsp/parallaxIcons/bn/ic-9.svg";
import styles from "./styles";
import { ParallaxContainer } from "../styles";

const icons = [Ic1, Ic2, Ic3, Ic4, Ic5, Ic1, Ic2, Ic3, Ic7, Ic5, Ic8, Ic9, Ic4];

export class BnIconsParallax extends Component {
  render() {
    const { children } = this.props;

    return (
      <ParallaxContainer>
        <IconsParallax className={styles.bnIconsParallax} icons={icons} />
        {children}
      </ParallaxContainer>
    );
  }
}
