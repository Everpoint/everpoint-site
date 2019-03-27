import React, { Component } from "react";

import { MobileNavbar } from "../../components/MobileNavbar/MobileNavbar";
import { Main } from "../../styles/mobile";
import { routes } from "../../routes";

const LoremIpsum = ({ title, onRef }) => (
  <div ref={onRef}>
    <h2>{title}</h2>
    {Array.from({ length: 8 }, (_, index) => (
      <p key={index}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis ex exercitationem
        facere laboriosam laudantium modi molestias necessitatibus nemo obcaecati placeat
        praesentium quod rem sapiente veritatis vero vitae voluptate voluptatibus.
      </p>
    ))}
  </div>
);

class MobileTest extends Component {
  state = {
    sections: routes.filter(({ outsideLink }) => !outsideLink),
    scrolled: false,
    mobileMenuIsOpen: false,
  };

  sectionsRef = [];

  componentDidMount() {
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

  scrollTo = index => {
    const section = this.sectionsRef[index];

    if (section) {
      const { top } = section.getBoundingClientRect();
      window.scrollBy({ top: top - 84, behavior: "smooth" });
    }

    this.setState({ mobileMenuIsOpen: false });
  };

  toggleMenu = () => this.setState({ mobileMenuIsOpen: !this.state.mobileMenuIsOpen });

  render() {
    const { scrolled, sections, mobileMenuIsOpen } = this.state;

    return (
      <>
        <MobileNavbar
          routes={routes}
          fixed={scrolled}
          toggleMenu={this.toggleMenu}
          scrollTo={this.scrollTo}
          mobileMenuIsOpen={mobileMenuIsOpen}
        />
        <Main>
          {sections.map(({ text }) => (
            <LoremIpsum key={text} title={text} onRef={this.onSectionRef} />
          ))}
        </Main>
      </>
    );
  }
}

export default MobileTest;
