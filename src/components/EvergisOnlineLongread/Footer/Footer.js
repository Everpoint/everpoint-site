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
          пользователей EverGIS Online? <br /> <br />
          <p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeIX2ahQzW5VRAe8r4Yzm-9tIjETVhuo0-dO5_TwaMPH4TxpA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Заполните анкету
            </a>{" "}
            <br />и поучаствуйте в <br /> юзабилити-тестировании!
          </p>
        </figure>
        {/*<figure>*/}
        {/*  Хотите узнать больше о возможностях сервиса и протестировать его на ваших реальных*/}
        {/*  задачах? Нет ничего проще. Зарегистрируйтесь по{" "}*/}
        {/*  <a href="http://public.everpoint.ru" target="_blank" rel="noopener noreferrer">*/}
        {/*    ссылке*/}
        {/*  </a>{" "}*/}
        {/*  и начните работу уже сегодня.*/}
        {/*</figure>*/}
      </RightSide>
    </FooterContainer>
  );
};
