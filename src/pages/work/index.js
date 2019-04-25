import React, { PureComponent } from "react";

import { isMobile } from "../../utils/browser";
import { getRouteById } from "../../routes/utils";
import { Section } from "../../components/Elements/Section";
import { Article } from "../../components/Elements/Article";
import { H2 } from "../../components/Typography/Headlines";
import { Header } from "../../components/Work/Header/Header";
import { Principle } from "../../components/HowWeAreWorking/Principle/Principle";
import { DevelopmentCycle } from "../../components/DevelopmentCycle/DevelopmentCycle";
import { DevelopmentWithinCompany } from "../../components/DevelopmentWithinCompany/DevelopmentWithinCompany";

import styles, { WorkMain, DevelopmentCycleContainer, Footer } from "../../styles/work";

class Work extends PureComponent {
  componentDidMount() {
    const { navigate } = this.props;

    if (isMobile()) {
      navigate("/");
    }
  }

  render() {
    const { routes } = this.props;
    const { sections } = getRouteById("jobs", routes);
    const { items, text, developmentCycle, developmentWithinCompany } = sections.find(
      item => item.id === "process",
    );
    const { title: developmentCycleTitle, blocks: developmentCycleBlocks } = developmentCycle;
    const {
      title: developmentWithinCompanyTitle,
      blocks: developmentWithinCompanyBlocks,
    } = developmentWithinCompany;

    return (
      <>
        <Header title={text} />
        <WorkMain>
          <Section>
            <Article>
              <H2>Для нас важны</H2>
              <Principle longread items={items} itemClassName={styles.principleItemLongread} />
            </Article>
            <DevelopmentCycleContainer>
              <H2 className={styles.developmentCycleTitle}>{developmentCycleTitle}</H2>
              {developmentCycleBlocks.map((block, index) => (
                <DevelopmentCycle
                  odd={index % 2 !== 0}
                  key={`development-cycle-${index}`}
                  {...block}
                />
              ))}
            </DevelopmentCycleContainer>
          </Section>
          <Section className={styles.developmentWithinCompany}>
            <Article>
              <H2>{developmentWithinCompanyTitle}</H2>
              <Footer>
                {developmentWithinCompanyBlocks.map((block, index) => (
                  <DevelopmentWithinCompany
                    key={`development-within-company-${index}`}
                    {...block}
                  />
                ))}
              </Footer>
            </Article>
          </Section>
        </WorkMain>
      </>
    );
  }
}

export default Work;
