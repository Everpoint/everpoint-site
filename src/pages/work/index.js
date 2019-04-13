import React, { Component } from "react";

import { Separate } from "../../components/Work/Separate/Separate";
import { Section } from "../../components/Elements/Section";
import { Article } from "../../components/Elements/Article";
import { H2 } from "../../components/Typography/Headlines";
import { Header } from "../../components/Work/Header/Header";

// import { WorkMain } from "../../styles/work";

class Work extends Component {
  render() {
    return (
      <>
        <Header />
        <Section>
          <Article>
            <H2>Наши принципы</H2>
            <Separate />
          </Article>
        </Section>
      </>
    );
  }
}

export default Work;
