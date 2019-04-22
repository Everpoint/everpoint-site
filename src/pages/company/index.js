import React, { PureComponent } from "react";
import { graphql } from "gatsby";

import { getPixelRatioPropName } from "../../utils/utils";
import { Section } from "../../components/Elements/Section";
import { Article } from "../../components/Elements/Article";
import { H2 } from "../../components/Typography/Headlines";
import { Paragraph } from "../../components/Typography/Paragraph";
import { CompanyPhoto } from "../../components/CompanyPhoto/CompanyPhoto";
import employees from "../../assets/employees";
import { OurClients } from "../../components/OurClients/OurClients";
import { Development } from "../../components/Development/Development";
import development from "../../assets/development";
import ourClients from "../../assets/our-clients";

import styles, { CompanyContainer, Footer, ChatRow } from "../../styles/company";

export class Company extends PureComponent {
  state = {
    container: null,
  };

  onContainerRef = ref => {
    const { container } = this.state;
    if (ref && container === null) {
      this.setState({
        container: ref,
      });
    }
  };

  render() {
    const { container } = this.state;
    const { isMobileOrTablet, isMobile } = this.props;

    return (
      <CompanyContainer ref={this.onContainerRef} onMouseMove={this.onMouseMove}>
        <CompanyPhoto
          title="Everpoint - это мы!"
          // add designer photo
          isMobileOrTablet={isMobileOrTablet}
          items={employees.map(({ portret, id }) => ({
            avatar: portret[getPixelRatioPropName()],
            id,
          }))}
        />
        <Section>
          <Article>
            <H2>Кто мы</H2>
            <Paragraph>
              Everpoint - команда профессионалов с большим опытом разработки геоинформационных
              систем и сервисов. Мы увлечены веб-картографией и геомаркетингом, но постоянно
              исследуем новые сферы применения геоаналитики и становимся экспертами в новых
              областях. Весь потенциал пространственных данных мы делаем доступным для всех видов
              бизнеса и управления территориями. Наша работа доказывает, что геоинформационные
              системы (ГИС) - это современный и удобный инструмент, который оптимизирует ваше время
              и ресурсы, а главное - помогает принимать быстрые и эффективные решения. Масштабы
              задач, которые могут решить ГИС, ничем не ограничены: будь то выбор места для открытия
              маленькой торговой точки или планирование целых городов. В этом помогает наш основной
              продукт — геоинформационная платформа EverGIS. Она предназначена для хранения,
              отображения, анализа и обработки больших геоданных.
            </Paragraph>
            <Paragraph>
              Что такое геоданные? Это информация о географическом местоположении объектов -
              координатах, и их дополнительных характеристиках (например, если говорить о зданиях,
              то такими характеристиками могут быть: тип объекта, площадь, этажность, год постройки)
            </Paragraph>
            <Paragraph>
              Инструменты пространственного анализа, которые есть в EverGIS, позволяют решать
              различные задачи, например: подбирать место для открытия бизнеса; проводить
              экономический анализ районов, городов, стран; анализировать природные явления;
              планировать развитие городской среды; контролировать освоение недр, например,
              нефтегазовых промыслов, и много другое.
            </Paragraph>
          </Article>
        </Section>
        <Section className={styles.whatAreWeDoing}>
          <Article>
            <H2>Что мы делаем</H2>
            <Paragraph>
              Платформа EverGIS - это ядро, на базе которого мы разрабатываем и внедряем
              профессиональные корпоративные геоинформационные системы (ГИС), геомаркетинговые
              решения, системы мониторинга геообъектов, публичные геосервисы и геопорталы.
            </Paragraph>
            <Paragraph>
              Мы убеждены, что за геоаналитикой будущее и она должна быть доступна каждому. В начале
              2019 года мы выпустили собственный открытый геосервис EverGIS Online - абсолютно
              бесплатный, работает в браузере, не требует специальных навыков. С помощью EverGIS
              Online любой человек может создать собственную интерактивную карту и поделиться ею в
              сети.
            </Paragraph>
          </Article>
        </Section>
        <Section className={styles.ourClients}>
          <Article>
            <H2>Наши клиенты</H2>
            <Paragraph>
              К нам обращаются клиенты, заинтересованные в системном подходе к развитию своего
              проекта и планируют каждый шаг, основываясь на объективных данных. Среди них Газпром
              нефть, Сбербанк, Федеральная корпорация по развитию малого и среднего
              предпринимательства, Правительство Москвы, Институт экологического проектироваия и
              изысканий. Мы рады таким сложным задачам: каждый реализованный проект помогает нам
              развивать свою ГИС-платформу и совершенствовать те продукты и решения, которые мы
              предлагаем.
            </Paragraph>
          </Article>
        </Section>
        <Section className={styles.ourClientsLogos}>
          <OurClients items={ourClients} />
        </Section>
        <Section className={styles.development}>
          <Article>
            <H2>Развитие</H2>
          </Article>
        </Section>
        <Development container={container} items={development} isMobile={isMobile} />
        <Footer as="footer">
          <Article>
            <Paragraph>
              У нас за плечами более 10 крупных проектов федерального масштаба, а также множество
              решений для небольших предприятий и малого бизнеса. Наша платформа EverGIS помогает
              сотням тысяч человек по всей России. Everpoint - это профессиональная команда с
              большим опытом внедрения ГИС в разных отраслях. Мы открыты для общения, готовы помочь
              и рады сотрудничеству.
            </Paragraph>
          </Article>
          <ChatRow>
            <Paragraph withoutMargin>Есть задача? Напишите нам в чат, отвечаем быстро!</Paragraph>
          </ChatRow>
        </Footer>
      </CompanyContainer>
    );
  }
}

export default props => {
  return <Company {...props} />;
};

export const companyPageQuery = graphql`
  query companyPage {
    markdownRemark(frontmatter: { templateKey: { eq: "company-page" } }) {
      frontmatter {
        title
        aboutUs {
          aboutUsTitle
          aboutUsDescription
        }
        aboutProducts {
          aboutProductsTitle
          aboutProductsDescription
        }
        aboutCustomers {
          aboutCustomersTitle
          aboutCustomersDescription
          customersLogos {
            logo
            isVisibleLogo
          }
        }
        development {
          developmentTitle
          tapeItem {
            date
            isVisibleTapeItem
            event
          }
        }
        footer
      }
    }
  }
`;
