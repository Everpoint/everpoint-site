import React from "react";

import { isReactElement } from "../utils/dom";
import { Content, HTMLContent } from "../cms/common/Content";
import noVacancy from "../assets/img/vacancy/no-vacancy.svg";
import { ReactComponent as DocIcon } from "../assets/img/icons/doc.svg";
import { H2 } from "../components/Typography/Headlines";
import { Field } from "../components/VacancyField/Field";
import styles, {
  VacancyContainer,
  VacancyTitle,
  VacancyArticle,
  VacancyAvatar,
  SkillSection,
  Ul,
  Test,
  TestTitle,
  DownloadTest,
  ConditionsSection,
  ConditionTitle,
  ConditionBlock,
  Footer,
  FooterTitle,
} from "../styles/vacancy";

export const Vacancy = React.memo(
  ({
    name,
    avatar,
    workFormat,
    employment,
    salary,
    contacts,
    skills,
    expectations,
    attachmentBlock,
    sentence,
    footerText,
  }) => {
    const { fullName, telegram, email } = contacts;
    const { expectationsTitle, requirementsList } = expectations;
    const { explanatoryText, fileName, file } = attachmentBlock;
    const { sentenceTitle, sentenceBody } = sentence;

    const FooterContent = isReactElement(footerText) ? Content : HTMLContent;
    const RequirementsListContent = isReactElement(requirementsList) ? Content : HTMLContent;
    const SentenceBodyContent = isReactElement(sentenceBody) ? Content : HTMLContent;

    return (
      <VacancyContainer>
        <VacancyArticle as="header" className={styles.header}>
          <VacancyAvatar style={{ backgroundImage: `url(${avatar || noVacancy})` }} />
          <VacancyTitle>{name}</VacancyTitle>
          <Field name="Формат работы" value={workFormat} />
          <Field name="Занятость" value={employment} />
          {salary && <Field name="Оклад" value={salary} />}
          <Field
            name="Контакты"
            value={[
              { type: "name", value: fullName },
              { type: "telegram", value: telegram },
              { type: "email", value: email },
            ]}
          />
          {Array.isArray(skills) && skills[0] && <Field name="Ключевые навыки" value={skills} />}
        </VacancyArticle>
        <SkillSection>
          <VacancyArticle>
            <H2>{expectationsTitle}</H2>
            <RequirementsListContent
              className={styles.greenLinks}
              Element={Ul}
              content={requirementsList}
            />
            {(explanatoryText || file) && (
              <Test>
                <TestTitle>{explanatoryText}</TestTitle>
                {file && (
                  <DownloadTest href={file}>
                    <DocIcon /> {fileName}
                  </DownloadTest>
                )}
              </Test>
            )}
          </VacancyArticle>
        </SkillSection>
        <ConditionsSection>
          <VacancyArticle>
            <ConditionTitle>{sentenceTitle}</ConditionTitle>
            <SentenceBodyContent
              className={styles.grayLinks}
              Element={ConditionBlock}
              content={sentenceBody}
            />
          </VacancyArticle>
          <Footer>
            <VacancyArticle>
              <FooterContent
                className={styles.grayLinks}
                Element={FooterTitle}
                content={footerText}
              />
            </VacancyArticle>
          </Footer>
        </ConditionsSection>
      </VacancyContainer>
    );
  },
);

export default ({ pageContext }, ...props) => <Vacancy {...props} {...pageContext} />;
