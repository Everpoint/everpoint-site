import React from "react";

import { FooterContainer, LeftSide, RightSide } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <LeftSide>
        <figure>
          EverGIS Online — это, пожалуй, самый современный инструмент для анализа географических
          данных. Что бы вы ни планировали — большое путешествие или один маленький шаг — EverGIS
          Online поможет!
          <div>Наши карты — ваш маршрут!</div>
        </figure>
      </LeftSide>
      <RightSide>
        <figure>
          Сервис работает в тестовом режиме. Хотите узнать больше и стать одним из первых
          пользователей EverGIS Online? Напишите нам в чат, мы предоставим тестовый доступ!
        </figure>
      </RightSide>
    </FooterContainer>
  );
};
