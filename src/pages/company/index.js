import React, { PureComponent } from "react";
import cn from "classnames";
import { graphql } from "gatsby";

import { getPixelRatioPropName } from "../../utils/utils";
import { Section } from "../../components/Elements/Section";
import { Article } from "../../components/Elements/Article";
import { H2 } from "../../components/Typography/Headlines";
import { Paragraph } from "../../components/Typography/Paragraph";
import { CompanyPhoto } from "../../components/CompanyPhoto/CompanyPhoto";
import { OurClients } from "../../components/OurClients/OurClients";
import { Development } from "../../components/Development/Development";
import { isReactElement } from "../../utils/dom";
import { Content, HTMLContent } from "../../cms/common/Content";

import typo from "../../styles/typography";
import styles, { CompanyContainer, Footer } from "../../styles/company";

export class Company extends PureComponent {
  state = {
    container: null,
  };

  onContainerRef = ref => {
    const { container } = this.state;
    if (ref && container === null) {
      this.setState({
        container: ref,
      });
    }
  };

  render() {
    const { container } = this.state;
    const {
      isMobileOrTablet,
      isMobile,
      title,
      employees,
      aboutUs,
      aboutProducts,
      aboutCustomers,
      development,
      footer,
    } = this.props;
    const aboutUsTitle = aboutUs && aboutUs.aboutUsTitle;
    const aboutUsDescription = aboutUs && aboutUs.aboutUsDescription;
    const AboutUsDescriptionContent = isReactElement(aboutUsDescription) ? Content : HTMLContent;
    const aboutProductsTitle = aboutProducts && aboutProducts.aboutProductsTitle;
    const aboutProductsDescription = aboutProducts && aboutProducts.aboutProductsDescription;
    const AboutProductsDescriptionContent = isReactElement(aboutProductsDescription)
      ? Content
      : HTMLContent;
    const aboutCustomersTitle = aboutCustomers && aboutCustomers.aboutCustomersTitle;
    const aboutCustomersDescription = aboutCustomers && aboutCustomers.aboutCustomersDescription;
    const AboutCustomersDescriptionContent = isReactElement(aboutCustomersDescription)
      ? Content
      : HTMLContent;
    const customersLogos =
      aboutCustomers && aboutCustomers.customersLogos ? aboutCustomers.customersLogos : [];
    const developmentTitle = development && development.developmentTitle;
    const developmentItems = development && development.tapeItem ? development.tapeItem : [];
    const FooterContent = isReactElement(footer) ? Content : HTMLContent;
    const employeesPhotos = employees
      ? employees.map((employee, index) => ({
          avatar: employee[getPixelRatioPropName()] || employee["x1"],
          id: `employee-${index}`,
        }))
      : [];

    return (
      <CompanyContainer ref={this.onContainerRef} onMouseMove={this.onMouseMove}>
        <CompanyPhoto title={title} isMobileOrTablet={isMobileOrTablet} items={employeesPhotos} />
        <Section>
          <Article>
            <H2>{aboutUsTitle}</H2>
            <AboutUsDescriptionContent
              className={cn(typo.typography, typo.withoutMarginBottom)}
              content={aboutUsDescription}
            />
          </Article>
        </Section>
        <Section className={styles.whatAreWeDoing}>
          <Article>
            <H2>{aboutProductsTitle}</H2>
            <AboutProductsDescriptionContent
              className={cn(typo.typography, typo.withoutMarginBottom)}
              content={aboutProductsDescription}
            />
          </Article>
        </Section>
        <Section className={styles.ourClients}>
          <Article>
            <H2>{aboutCustomersTitle}</H2>
            <AboutCustomersDescriptionContent
              className={cn(typo.typography, typo.withoutMarginBottom)}
              content={aboutCustomersDescription}
            />
          </Article>
        </Section>
        <Section className={styles.ourClientsLogos}>
          <OurClients items={customersLogos.filter(logo => logo.isVisibleLogo)} />
        </Section>
        <Section className={styles.development}>
          <Article>
            <H2>{developmentTitle}</H2>
          </Article>
        </Section>
        <Development
          container={container}
          items={developmentItems.filter(item => item.isVisibleTapeItem)}
          isMobile={isMobile}
        />
        <Footer as="footer">
          <Article>
            <FooterContent className={cn(typo.typography, styles.footerContent)} content={footer} />
          </Article>
          <Paragraph withoutMargin className={styles.chatText}>
            Есть задача? Напишите нам в чат, отвечаем быстро!
          </Paragraph>
        </Footer>
      </CompanyContainer>
    );
  }
}

export default ({ data, ...props }) => {
  const normalizedData = data && data.markdownRemark && data.markdownRemark.frontmatter;
  return <Company {...props} {...normalizedData} />;
};

export const companyPageQuery = graphql`
  query companyPage {
    markdownRemark(frontmatter: { templateKey: { eq: "company-page" } }) {
      frontmatter {
        title
        employees {
          x1
          x2
          x3
        }
        aboutUs {
          aboutUsTitle
          aboutUsDescription
        }
        aboutProducts {
          aboutProductsTitle
          aboutProductsDescription
        }
        aboutCustomers {
          aboutCustomersTitle
          aboutCustomersDescription
          customersLogos {
            logo
            isVisibleLogo
          }
        }
        development {
          developmentTitle
          tapeItem {
            date
            isVisibleTapeItem
            event
          }
        }
        footer
      }
    }
  }
`;
