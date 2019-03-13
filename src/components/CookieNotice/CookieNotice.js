import React, { Component } from "react";

import { Portal } from "../../components/Portal/Portal";
import { DefaultGatsbyLink as Link} from '../../components/Typography/Links';
import { CookieNoticeContainer, PrimaryButton } from "./styles";

export class CookieNotice extends Component {
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

  render() {
    const { isVisible, transitionDisabled } = this.state;

    return (
      <>
        {typeof window !== "undefined" && (
          <Portal>
            <CookieNoticeContainer isVisible={isVisible} transitionDisabled={transitionDisabled}>
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
