import React, { Component } from "react";
import cn from "classnames";

import { Background } from "../../components/MainPageElements/Background";
import { ImagesDownloadListener } from "../../components/ImagesDownloadListener/ImagesDownloadListener";
import metroInterlaced from "../../assets/img/main-slides/metro.png";
import bus from "../../assets/img/main-slides/bus.svg";
import metro from "../../assets/img/main-slides/metro.svg";
import { isMobile, isTablet } from "../../utils/browser";
import { H2 } from "../../components/Atoms/Atoms";
import { socials } from "../../assets/social";
import { AddressLink } from "../../components/AddressLink/AddressLink";

import styles, {
  Main,
  Content,
  LeftSide,
  RightSide,
  SocialBlock,
  SocialLink,
  Link,
  PrimaryButton,
  StopeButton,
  Copyright,
} from "../../styles/contacts";
import { animation } from "../../components/MainPageElements/Section";
import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";

class ContactsBase extends Component {
  state = {
    stope: true,
    isMobileOrTablet: false,
    isMobile: null,
    imagesIsLoaded: false,
  };

  componentDidMount() {
    this.setState({ isMobileOrTablet: isMobile() || isTablet(), isMobile: isMobile() });
  }

  render() {
    const { status, location, titles, direction, scrollTop } = this.props;
    const { stope, isMobileOrTablet, imagesIsLoaded, isMobile } = this.state;

    return (
      <>
        <Background
          style={{ top: `${scrollTop}px` }}
          backgroundImage={imagesIsLoaded ? (stope ? metro : bus) : metroInterlaced}
          className={cn(styles.background, { [styles.hideBackground]: isMobile })}
          status={status}
          location={location}
        />
        <Main style={{ transform: `translateY(${scrollTop}px)` }}>
          <ImagesDownloadListener
            images={[bus, metro]}
            onLoad={() => this.setState({ imagesIsLoaded: true })}
          />
          <Content className={animation(status, direction)}>
            <LeftSide>
              <H2 as="h1">{titles && titles.find(({ id }) => id === "contacts").title}</H2>
              <Link as="address" className={styles.address}>
                127051, Россия, <br /> г. Москва, ул. Трубная, д. 25 к. 1
              </Link>
              {isMobileOrTablet && <AddressLink>Открыть адрес на карте</AddressLink>}
              <Link href="tel:+74955060774">+7 (495) 506-07-74</Link>
              <Link href="mailto:info@everpoint.ru">info@everpoint.ru</Link>
              <SocialBlock>
                {socials.map(({ img, link, name }) => (
                  <SocialLink
                    target="_blank"
                    href={link}
                    key={`social-${name}`}
                    style={{ backgroundImage: `url(${img})` }}
                  />
                ))}
              </SocialBlock>
            </LeftSide>
            <RightSide>
              <PrimaryButton
                raisedButton
                onClick={() => this.setState({ stope: true })}
                isActive={stope}
              >
                Метро
              </PrimaryButton>
              <StopeButton
                raisedButton
                onClick={() => this.setState({ stope: false })}
                isActive={!stope}
              >
                Остановки
              </StopeButton>
            </RightSide>
          </Content>
          <Copyright className={cn(animation(status, direction))} as="footer">
            © 2019 ООО «Эверпоинт». Все права защищены.
          </Copyright>
        </Main>
      </>
    );
  }
}

export const ContactsWithLayout = props => (
  <MainLayoutConsumer>
    {layoutProps => <ContactsBase {...props} {...layoutProps} />}
  </MainLayoutConsumer>
);

export default ContactsWithLayout;
