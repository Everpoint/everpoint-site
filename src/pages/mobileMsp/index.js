import React, { PureComponent } from "react";

import { getPixelRatioPropName } from "../../utils/utils";
import { isMobile } from "../../utils/browser";
import { SectionWithIcon } from "../../components/MobileMspLongread/SectionWithIcon/SectionWithIcon";
import phones from "../../assets/img/portfolio/mobileMsp/phones.jpg";
import { Header } from "../../components/PortfolioLongreadHeader/Header";
import { Section } from "../../components/Elements/Section";
import { Article } from "../../components/Elements/Article";
import { H2 } from "../../components/Typography/Headlines";
import { Paragraph } from "../../components/Typography/Paragraph";
import { AndroidStoreLink, IosStoreLink } from "../../components/StoreLinks/StoreLinks";
import { OutsideLink } from "../../components/OutsideLink/OutsideLink";
import { BnSection } from "../../components/MobileMspLongread/BnSection/BnSection";
import { getProject } from "../../routes";
import { Footer } from "../../components/MobileMspLongread/Footer/Footer";
import styles, {
  MobileMspContainer,
  MobileMspStoreContainer,
  Phones,
} from "../../styles/mobileMsp";

const images = [phones];

class MobileMsp extends PureComponent {
  static defaultProps = {
    projectId: "mobileMsp",
  };

  state = {
    ratio: "x1",
    mobilePlatform: false,
    animate: false,
  };

  componentDidMount() {
    this.setState({ ratio: getPixelRatioPropName(), mobilePlatform: isMobile() });
  }

  render() {
    const { ratio, mobilePlatform, animate } = this.state;
    const { location, projectId } = this.props;
    const mobileMsp = getProject({ projectId });
    const { ios, android } = mobileMsp;

    return (
      <MobileMspContainer>
        <Header
          images={images}
          animate={animate}
          onLoad={() => this.setState({ animate: true })}
          projectId={projectId}
          location={location}
          {...mobileMsp}
          containerClassName={styles.mobileMspHeader}
          leftSideClassName={styles.mobileMspHeaderLeftSide}
          rightSideClassName={styles.mobileMspHeaderRightSide}
          leftSide={
            <MobileMspStoreContainer>
              <IosStoreLink href={ios} target="_blank" />
              <AndroidStoreLink href={android} target="_blank" />
            </MobileMspStoreContainer>
          }
        >
          <Phones animate={animate} src={phones} />
        </Header>
        <Section withoutPaddingBottom>
          <Article>
            <H2>Мобильный бизнес-навигатор</H2>
            <Paragraph>
              Когда нужно срочно предоставить краткую информацию о запланированном бизнесе
              потенциальным бизнес-партнерам и инвесторам, на помощь придут мобильные приложения,
              разработанные Everpoint совместно с{" "}
              <OutsideLink
                className={styles.outsideLinkColor}
                style={{ color: "#67bcdc" }}
                href="https://mobileup.ru/business-navigator"
              >
                MobileUp
              </OutsideLink>{" "}
              по заказу Корпорации по развитию малого и среднего предпринимательства.
            </Paragraph>
            <SectionWithIcon ratio={ratio} />
          </Article>
        </Section>
        <BnSection ratio={ratio} />
        <Footer ratio={ratio} mobilePlatform={mobilePlatform} />
      </MobileMspContainer>
    );
  }
}

export default MobileMsp;
