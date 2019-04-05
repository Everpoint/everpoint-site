import React from "react";

import { ReactComponent as Svg404 } from "../assets/img/assets/404.svg";
import { Background, backgrounds } from "../components/MainPageElements/Background";
import styles, { Main404, Article, Title, Description } from "../styles/404";

const NotFoundPage = () => (
  <Main404>
    <Background backgroundImage={backgrounds[3]} />
    <Article>
      <Svg404 className={styles.svg404} />
      <Title>Страница не найдена!</Title>
      <Description>Воспользуйтесь меню, чтобы найти интересующую информацию.</Description>
    </Article>
  </Main404>
);

export default NotFoundPage;
