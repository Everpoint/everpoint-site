import React, { Component } from "react";

import Page404 from "../../pages/404";
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
    scrollToId: null,
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

  componentDidUpdate({ location: prevLocation }, prevState) {
    const { location } = this.props;
    const { scrollToId } = this.state;

    const prevPageIs404 = prevLocation.pathname.indexOf("404") === 1;

    if (prevPageIs404 && prevLocation.pathname !== location.pathname) {
      this.setState(
        {
          scrollToId: null,
        },
        () => {
          this.scrollTo(scrollToId);
        },
      );
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
    const { navigate, location } = this.props;
    const section = this.sectionsRef.find(section => section.id === id);
    const is404Page = location.pathname.indexOf("404") === 1;

    if (section && section.node && !is404Page) {
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
    } else {
      navigate("/");
    }

    const state = {
      mobileMenuIsOpen: false,
    };

    if (is404Page) {
      state.scrollToId = id;
    }

    this.setState(state);
  };

  toggleMenu = () => this.setState({ mobileMenuIsOpen: !this.state.mobileMenuIsOpen });

  render() {
    const { sections, mobileMenuIsOpen, ratio } = this.state;
    const { news, titles, navigate, location } = this.props;

    const is404Page = location.pathname.indexOf("404") === 1;

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
        {is404Page ? (
          <Page404 location={location} />
        ) : (
          sections.map(item => (
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
          ))
        )}
      </Main>
    );
  }
}

export default MobileMainPage;
