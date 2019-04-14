import React, { PureComponent } from "react";

import { getRouteById } from "../../routes/utils";
import { Separate } from "../../components/Work/Separate/Separate";
import { Section } from "../../components/Elements/Section";
import { Article } from "../../components/Elements/Article";
import { H2 } from "../../components/Typography/Headlines";
import { Header } from "../../components/Work/Header/Header";
import { Principle } from "../../components/HowWeAreWorking/Principle/Principle";

import styles, { WorkMain } from "../../styles/work";

class Work extends PureComponent {
  render() {
    const { routes } = this.props;
    const { sections } = getRouteById("jobs", routes);
    const { items, text } = sections.find(item => item.id === "process");

    return (
      <>
        <Header title={text} />
        <WorkMain>
          <Section>
            <Article>
              <H2>Наши принципы</H2>
              <Principle longread items={items} itemClassName={styles.principleItemLongread} />
              <Separate />
              <H2>Цикл разработки</H2>
              {Array.from({ length: 24 }, (_, index) => (
                <p key={index}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi aperiam aut
                  delectus dignissimos dolorem ea est illum, inventore laudantium, nemo omnis
                  placeat quaerat quisquam sit suscipit tempora velit vero.
                </p>
              ))}
            </Article>
          </Section>
        </WorkMain>
      </>
    );
  }
}

export default Work;
