import React, { Component } from "react";

import Page404 from "../../pages/404";
import { MobileNavbar } from "../../components/MobileNavbar/MobileNavbar";
import { Section } from "../../components/MobileMainPages/Section";
import { Main, Background } from "../../styles/mobile";
import { getPixelRatioPropName } from "../../utils/utils";
import { animate, ease } from "../../utils/animate";

class MobileMainPage extends Component {
  state = {
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
    } else {
      if (location.state && location.state.scrollTo) {
        this.scrollTo(location.state.scrollTo);
      }
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

  scrollTo = id => {
    const { navigate, location } = this.props;
    const section = this.sectionsRef.find(section => section.id === id);
    const is404Page = location.pathname.indexOf("404") === 1;

    if (section && section.node && !is404Page) {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const { top } = section.node.getBoundingClientRect();

      animate({
        duration: 400,
        timing: ease,
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
    const { mobileMenuIsOpen, ratio } = this.state;
    const { news, titles, navigate, location, routes } = this.props;
    const is404Page = location.pathname.indexOf("404") === 1;

    return (
      <Main>
        <Background />
        <MobileNavbar
          routes={routes}
          titles={titles}
          toggleMenu={this.toggleMenu}
          scrollTo={this.scrollTo}
          mobileMenuIsOpen={mobileMenuIsOpen}
        />
        {is404Page ? (
          <Page404 location={location} />
        ) : (
          routes.map(item => (
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
