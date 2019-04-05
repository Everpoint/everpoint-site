import React, { Component } from "react";

import { MobileNavbar } from "../../components/MobileNavbar/MobileNavbar";
import { Section } from "../../components/MobileMainPages/Section";
import { routes } from "../../routes";
import { Main, Background } from "../../styles/mobile";
import { getPixelRatioPropName } from "../../utils/utils";

class MobileMainPage extends Component {
  state = {
    sections: routes,
    mobileMenuIsOpen: false,
    ratio: 1,
  };

  sectionsRef = [];

  componentDidMount() {
    const { location } = this.props;
    this.setState({ ratio: getPixelRatioPropName() });
    const section = this.sectionsRef.find(({ id }) => location.pathname.includes(id));

    if (section && section.id) {
      this.scrollTo(section.id);
    }
  }

  onSectionRef = (ref, id) => {
    if (this.sectionsRef.length < 6) {
      this.sectionsRef.push({
        node: ref,
        id,
      });
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

  scrollTo = id => {
    const section = this.sectionsRef.find(section => section.id === id);
    if (section && section.node) {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const { top } = section.node.getBoundingClientRect();

      this.animate({
        duration: 400,
        timing: this.ease,
        draw: progress => {
          const y =
            scrollTop <= top
              ? progress * (top - 74) + scrollTop
              : scrollTop + progress * (top - 74);
          window.scrollTo(0, y);
        },
      });
    }

    this.setState({ mobileMenuIsOpen: false });
  };

  toggleMenu = () => this.setState({ mobileMenuIsOpen: !this.state.mobileMenuIsOpen });

  render() {
    const { sections, mobileMenuIsOpen, ratio } = this.state;
    const { news, titles, navigate } = this.props;

    return (
      <Main>
        <Background />
        <MobileNavbar
          routes={sections}
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
            onRef={(ref, id) => this.onSectionRef(ref, id || item.id)}
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
