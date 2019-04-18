import React from "react";

import styles from "../../styles/typography";
import { PoliticsContainer, MainTitle, City, Block, UpdateDate } from "../../styles/politics";

const Politics = React.memo(() => {
  return (
    <PoliticsContainer as="main">
      <Block as="header">
        <MainTitle>Политика конфиденциальности</MainTitle>
        <City>г. Москва</City>
        <div className={styles.typography}>
          <p>
            Настоящая Политика конфиденциальности персональных данных (далее – Политика
            конфиденциальности) действует в отношении всей информации, которую Интернет-сайт
            everpoint.ru, расположенный на доменном имени www.everpoint.ru, может получить о
            Пользователе во время использования сайта everpoint.ru.
          </p>
        </div>
      </Block>
      <Block className={styles.typography}>
        ggwp
      </Block>
      <UpdateDate>Обновлено 19 апреля 2019г.</UpdateDate>
    </PoliticsContainer>
  );
});

export default Politics;
