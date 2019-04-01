import React, { Component } from "react";

import { MobileNavbar } from "../../components/MobileNavbar/MobileNavbar";
import { Section } from "../../components/MobileMainPages/Section";
import { routes } from "../../routes";
import { Main } from "../../styles/mobile";
import { getPixelRatioPropName } from "../../utils/utils";

class MobileMainPage extends Component {
  state = {
    sections: routes.filter(({ id }) => id !== "jobs"),
    scrolled: false,
    mobileMenuIsOpen: false,
    ratio: 1,
  };

  sectionsRef = [];

  componentDidMount() {
    this.setState({ ratio: getPixelRatioPropName() });
    window.addEventListener("scroll", this.onScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, true);
  }

  onScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 0) {
      this.setState({
        scrolled: true,
      });
    } else {
      this.setState({
        scrolled: false,
      });
    }
  };

  onSectionRef = ref => {
    const { sections } = this.state;

    if (sections.length !== this.sectionsRef.length) {
      this.sectionsRef.push(ref);
    }
  };

  animate({ duration = 144, timing, draw }) {
    const self = this;
    const start = performance.now();
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
      const progress = timing(timeFraction);
      draw(progress, self);
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

  ease(t) {
    return t * t;
  }

  scrollTo = index => {
    const section = this.sectionsRef[index];

    if (section) {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const { top } = section.getBoundingClientRect();

      this.animate({
        duration: 400,
        timing: this.ease,
        draw: progress => {
          const y =
            scrollTop <= top
              ? progress * (top - 84) + scrollTop
              : scrollTop + progress * (top - 84);
          window.scrollTo(0, y);
        },
      });
    }

    this.setState({ mobileMenuIsOpen: false });
  };

  toggleMenu = () => this.setState({ mobileMenuIsOpen: !this.state.mobileMenuIsOpen });

  render() {
    const { scrolled, sections, mobileMenuIsOpen, ratio } = this.state;
    const { news, titles, navigate } = this.props;

    return (
      <Main>
        <MobileNavbar
          routes={sections}
          fixed={scrolled}
          titles={titles}
          toggleMenu={this.toggleMenu}
          scrollTo={this.scrollTo}
          mobileMenuIsOpen={mobileMenuIsOpen}
        />
        {sections.map(item => (
          <Section
            key={item.id}
            titles={titles}
            navigate={navigate}
            onRef={this.onSectionRef}
            routes={routes}
            news={news}
            ratio={ratio}
            {...item}
          />
        ))}
      </Main>
    );
  }
}

export default MobileMainPage;
