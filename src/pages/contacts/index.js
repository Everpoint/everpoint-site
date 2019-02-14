import React, { PureComponent } from "react";
import cn from "classnames";

import bus from "../../assets/img/main-slides/bus.svg";
import metro from "../../assets/img/main-slides/metro.svg";
import { ImagesDownloadListener } from "../../components/ImagesDownloadListener/ImagesDownloadListener";
import { isMobile } from "../../utils/browser";
import { fade, transition } from "../../components/Transition/animation";
import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { Portal } from "../../components/Portal/Portal";
import bg from "../../components/Background/styles";
import { TelegramButton } from "../../components/Buttons/TelegramButton";
import { Button } from "../../components/Buttons/Buttons";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { H2 } from "../../components/Atoms/Atoms";
import { socials } from "../../assets/social";
import { AddressLink } from "../../components/AddressLink/AddressLink";

import styles, {
  SocialBlock,
  SocialLink,
  Link,
  ContactsLeftSide,
  BtnGroup,
  TelegramBtnContainer,
} from "../../styles/contacts";
import { getRouteByLocation } from "../../routes";

export const ButtonGroup = ({ stope, onClickBus, onClickMetro }) => {
  return (
    <>
      <Button raisedButton onClick={onClickBus} isActive={stope}>
        Остановки
      </Button>
      <Button raisedButton onClick={onClickMetro} isActive={!stope}>
        Метро
      </Button>
    </>
  );
};

class Contacts extends PureComponent {
  state = {
    stope: true,
    isMobile: false,
    backgroundsIsLoaded: false,
  };

  componentDidMount() {
    this.setState({ isMobile: isMobile() });
  }

  render() {
    const { status, location, disableTransition } = this.props;
    const { text } = getRouteByLocation(location);
    const { stope, isMobile, backgroundsIsLoaded } = this.state;

    const btnGroupProps = {
      stope,
      status,
      onClickBus: () => this.setState({ stope: true }),
      onClickMetro: () => this.setState({ stope: false }),
    };

    return (
      <>
        <ImagesDownloadListener
          images={[bus, metro]}
          onLoad={() => this.setState({ backgroundsIsLoaded: true })}
        />
        <MainAnimation
          {...this.props}
          disableTransition={disableTransition}
          base64styles={!stope ? bg.metro : !backgroundsIsLoaded ? bg.busPngPreview : ""}
          rightSideClassName={styles.contactsRightSide}
          willChangeLeftSideClassName={styles.willChangeContactsLeftSideClassName}
          willChangeRightSideClassName={styles.willChangeRightSideClassName}
          leftSide={
            <ContactsLeftSide>
              <H2 as="h1">{text}</H2>
              <Link as="address" className={styles.address}>
                127051, Россия, <br /> г. Москва, ул. Трубная, д. 25 к. 1
              </Link>
              {isMobile && <AddressLink>Открыть адрес на карте</AddressLink>}
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
            </ContactsLeftSide>
          }
          rightSide={
            <>
              <ButtonGroup {...btnGroupProps} />
              <MainLayoutConsumer>
                {({ mobileMenuIsOpen }) => (
                  <>
                    {!mobileMenuIsOpen && isMobile && (
                      <Portal>
                        <BtnGroup className={cn(fade[status], transition[status])}>
                          <ButtonGroup {...btnGroupProps} />
                        </BtnGroup>
                      </Portal>
                    )}
                  </>
                )}
              </MainLayoutConsumer>
            </>
          }
        >
          <TelegramBtnContainer
            disableTransition={disableTransition}
            className={cn(fade[status], transition[status])}
          >
            <TelegramButton
              as="a"
              className={styles.telegramBtn}
              target="_blank"
              href="https://telegram.me/redditr"
            />
          </TelegramBtnContainer>
        </MainAnimation>
      </>
    );
  }
}

export default Contacts;
