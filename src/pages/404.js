import React from "react";
import cn from "classnames";

import { ReactComponent as Svg404 } from "../assets/img/assets/404.svg";
import { Background } from "../components/MainPageElements/Background";
import { animation } from "../components/MainPageElements/Section";
import styles, { Main404, Article, Title, Description } from "../styles/404";

const NotFoundPage = ({ status, location }) => (
  <Main404>
    <Background status={status} location={location} />
    <Article className={animation(status)}>
      <Svg404 className={cn(styles.svg404, styles.down)} />
      <Svg404 className={cn(styles.svg404, styles.up)} />
      <Title>Страница не найдена!</Title>
      <Description>Воспользуйтесь меню, чтобы найти интересующую информацию.</Description>
    </Article>
  </Main404>
);

export default NotFoundPage;
