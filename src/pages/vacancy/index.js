import React from "react";

import { ReactComponent as DocIcon } from "../../assets/img/icons/doc.svg";
import { getVacancyAvatarByType } from "../../components/TeamMembers/getVacancyAvatarByType";
import { BigH1, H2 } from "../../components/Typography/Headlines";
import { Article } from "../../components/Elements/Article";
import { Field } from "../../components/Vacancy/Field/Field";
import { TelegramButton } from "../../components/Buttons/TelegramButton";
import { Conditions } from "../../components/Vacancy/Conditions/Conditions";
import styles, {
  VacancyContainer,
  VacancyAvatar,
  SkillSection,
  Ul,
  Test,
  TestTitle,
  DownloadTest,
  ConditionsSection,
  Footer,
  FooterTitle,
} from "../../styles/vacancy";

export const Vacancy = React.memo(() => {
  return (
    <VacancyContainer>
      <Article>
        <VacancyAvatar>{getVacancyAvatarByType("developer")}</VacancyAvatar>
        <BigH1>Middle front-end разработчик на React</BigH1>
        <Field name="Формат работы" value="Офис / Удалённая работа" />
        <Field name="Занятость" value="Полная" />
        <Field name="Оклад" value="100 000 - 120 000 руб." />
        <Field
          name="Контакты"
          value={[
            { type: "name", value: "Эльдар Мамедов" },
            { type: "telegram", value: "eldarmamedov" },
            { type: "email", value: "em@everpoint.ru" },
          ]}
        />
        <Field
          name="Ключевые навыки"
          value={[
            "JavaScript",
            "Веб-разработка",
            "HTML",
            "CSS",
            "React.js",
            "Typescript",
            "Redux",
            "Soft skills",
            "Git",
          ]}
        />
      </Article>
      <SkillSection>
        <Article>
          <H2>Что мы ждем от вас</H2>
          <Ul>
            <li>
              JS ES6, включая scope’ы, классы, наследование, замыкания, Promise’ы и
              деструктуризацию, умение писать на чистом JS;
            </li>
            <li>Опыт разработки sрpa в экосистеме react не менее 2 лет;</li>
            <li>webpack, npm + scripts;</li>
            <li>HTML5;</li>
            <li>CSS3, Less или Sass (используем styled-components);</li>
            <li>Понимание принципов Unit-тестирования (используем jest);</li>
            <li>Обучаемость: искреннее желание учиться и развиваться в своем направлении;</li>
            <li>Знание и применение в работе систем контроля версий;</li>
            <li>
              Личностные качества: креативность, целеустремленность, ответственность,
              инициативность, энтузиазм, готовность глубоко погружаться в задачи.
            </li>
          </Ul>
          <Test>
            <TestTitle>На данную вакансию требуется выполнить тестовое задание</TestTitle>
            <DownloadTest>
              <DocIcon /> Тестовое задание.docx
            </DownloadTest>
          </Test>
        </Article>
      </SkillSection>
      <ConditionsSection>
        <Article>
          <H2>Что предлагаем взамен</H2>
          <Conditions />
        </Article>
        <Footer>
          <Article>
            <FooterTitle>
              Хотите у нас работать? <br /> Пишите в чат или по указанным в вакансии контактам!
            </FooterTitle>
          </Article>
          <TelegramButton className={styles.telegramBtn} />
        </Footer>
      </ConditionsSection>
    </VacancyContainer>
  );
});

export default Vacancy;
