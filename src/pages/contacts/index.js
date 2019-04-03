import React, { Component } from "react";
import cn from "classnames";

import { Background } from "../../components/MainPageElements/Background";
import { ImagesDownloadListener } from "../../components/ImagesDownloadListener/ImagesDownloadListener";
import busInterlaced from "../../assets/img/main-slides/bus.png";
import bus from "../../assets/img/main-slides/bus.svg";
import metro from "../../assets/img/main-slides/metro.svg";
import { isMobile, isTablet } from "../../utils/browser";
import { TelegramButton } from "../../components/Buttons/TelegramButton";
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
} from "../../styles/contacts";
import { animation } from "../../components/MainPageElements/Section";
import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";

class ContactsBase extends Component {
  state = {
    stope: true,
    isMobileOrTablet: false,
    imagesIsLoaded: false,
  };

  componentDidMount() {
    this.setState({ isMobileOrTablet: isMobile() || isTablet() });
  }

  render() {
    const { status, location, titles } = this.props;
    const { stope, isMobileOrTablet, imagesIsLoaded } = this.state;

    return (
      <Main>
        <ImagesDownloadListener
          images={[bus, metro]}
          onLoad={() => this.setState({ imagesIsLoaded: true })}
        />
        <Background
          backgroundImage={imagesIsLoaded ? (stope ? bus : metro) : busInterlaced}
          className={styles.background}
          status={status}
          location={location}
        />
        <Content className={animation(status)}>
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
            <StopeButton
              raisedButton
              onClick={() => this.setState({ stope: true })}
              isActive={stope}
            >
              Остановки
            </StopeButton>
            <PrimaryButton
              raisedButton
              onClick={() => this.setState({ stope: false })}
              isActive={!stope}
            >
              Метро
            </PrimaryButton>
          </RightSide>
        </Content>
        <TelegramButton
          as="a"
          className={cn(styles.telegramBtn, animation(status))}
          target="_blank"
          href="https://telegram.me/redditr"
        />
      </Main>
    );
  }
}

export const ContactsWithLayout = props => (
  <MainLayoutConsumer>
    {layoutProps => <ContactsBase {...props} {...layoutProps} />}
  </MainLayoutConsumer>
);

export default ContactsWithLayout;
