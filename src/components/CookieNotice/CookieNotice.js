import React, { Component } from "react";
import PropTypes from "prop-types";

import { Portal } from "../../components/Portal/Portal";
import { DefaultLink as Link } from "../../components/Typography/Links";
import { CookieNoticeContainer, PrimaryButton } from "./styles";

export class CookieNotice extends Component {
  static propTypes = {
    navigate: PropTypes.func,
    location: PropTypes.object,
  };

  state = {
    isVisible: false,
    transitionDisabled: true,
  };

  componentDidMount() {
    const cookiePolice = localStorage.getItem("cookiePolice");

    if (cookiePolice === null) {
      this.setState({ isVisible: true });
    }
  }

  gotCookie = () => {
    this.setState(
      {
        isVisible: false,
        transitionDisabled: false,
      },
      () => {
        localStorage.setItem("cookiePolice", true);
      },
    );
  };

  goToPolitics = e => {
    const { navigate, location } = this.props;
    e.preventDefault();
    navigate("/politics", {
      state: { prevPathname: location.pathname },
    });
  };

  render() {
    const { isVisible, transitionDisabled } = this.state;

    return (
      <>
        {typeof window !== "undefined" && (
          <Portal>
            <CookieNoticeContainer isVisible={isVisible} transitionDisabled={transitionDisabled}>
              <div>
                Сайт everpoint.ru использует файлы cookies, IP-адрес вашего браузера, историю o
                посещённых страницах сайта, данные геолокации. Эта информация поможет нам улучшить
                работу сайта. <Link onClick={this.goToPolitics}>Политика конфиденциальности.</Link>
              </div>
              <PrimaryButton raisedButton primary onClick={this.gotCookie}>
                ok
              </PrimaryButton>
            </CookieNoticeContainer>
          </Portal>
        )}
      </>
    );
  }
}
