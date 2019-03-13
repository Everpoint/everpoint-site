import React, { Component } from "react";

import { Portal } from "../../components/Portal/Portal";
import { CookieNoticeContainer, PrimaryButton, Link } from "./styles";

export class CookieNotice extends Component {
  state = {
    isVisible: false,
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
      },
      () => {
        localStorage.setItem("cookiePolice", true);
      },
    );
  };

  render() {
    const { isVisible } = this.state;

    return (
      <>
        {typeof window !== "undefined" && (
          <Portal>
            <CookieNoticeContainer isVisible={isVisible}>
              <div>
                Сайт everpoint.ru использует файлы cookies, IP адрес вашего браузера, историю
                посещённых страницах сайта, данные геолокации. Эта информация поможет нам улучшить
                работу сайта. <Link to="/">Условия использования.</Link>
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
