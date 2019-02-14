import React, { Component } from "react";

import { Separate } from "../../components/Work/Separate/Separate";
import { Section } from "../../components/Elements/Section";
import { Article } from "../../components/Elements/Article";
import { H2 } from "../../components/Typography/Headlines";

// import styles from "../../styles/work";

const LoremIpsum = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem dolore eligendi labore minus
      placeat quis quo sed voluptas voluptates. Asperiores dicta enim maxime quaerat quia suscipit
      vero voluptate voluptatem.
    </p>
  );
};

class Work extends Component {
  render() {
    return (
      <>
        <Section>
          <Article>
            <H2>Наши принципы</H2>
            {Array.from({ length: 22 }, (_, index) => (
              <LoremIpsum key={index} />
            ))}
            <Separate />
            {Array.from({ length: 44 }, (_, index) => (
              <LoremIpsum key={index} />
            ))}
          </Article>
        </Section>
      </>
    );
  }
}

export default Work;
