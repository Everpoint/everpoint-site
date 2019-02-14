import React, { Component } from "react";

import { Header } from "../../components/PortfolioLongreadHeader/Header";
import { getProject } from "../../routes";
import { OutsideLink } from "../../components/OutsideLink/OutsideLink";
import { Section } from "../../components/Elements/Section";
import { Article } from "../../components/Elements/Article";
import { H1 } from "../../components/Typography/Headlines";
import { Paragraph } from "../../components/Typography/Paragraph";
import { ImageWithTitle } from "../../components/Multimedia/ImageWithTitle";
import { Figures } from "../../components/Figures/Figures";
import { Footer } from "../../components/EvergisOnlineLongread/Footer/Footer";
import { HeaderRightSide } from "../../components/EvergisOnlineLongread/HeaderRightSide/HeaderRightSide";
import { getPixelRatioPropName } from "../../utils/utils";

import patternImg from "../../assets/img/portfolio/evergisOnline/header/pattern.png";
import appX1 from "../../assets/img/portfolio/evergisOnline/header/app/app.png";
import appX2 from "../../assets/img/portfolio/evergisOnline/header/app/app@2x.png";
import appX3 from "../../assets/img/portfolio/evergisOnline/header/app/app@3x.png";
import leftCard1X1 from "../../assets/img/portfolio/evergisOnline/header/leftCard-1/leftCard-1.png";
import leftCard1X2 from "../../assets/img/portfolio/evergisOnline/header/leftCard-1/leftCard-1@2x.png";
import leftCard1X3 from "../../assets/img/portfolio/evergisOnline/header/leftCard-1/leftCard-1@3x.png";
import leftCard2X1 from "../../assets/img/portfolio/evergisOnline/header/leftCard-2/leftCard-2.png";
import leftCard2X2 from "../../assets/img/portfolio/evergisOnline/header/leftCard-2/leftCard-2@2x.png";
import leftCard2X3 from "../../assets/img/portfolio/evergisOnline/header/leftCard-2/leftCard-2@3x.png";
import leftCard3X1 from "../../assets/img/portfolio/evergisOnline/header/leftCard-3/leftCard-3.png";
import leftCard3X2 from "../../assets/img/portfolio/evergisOnline/header/leftCard-3/leftCard-3@2x.png";
import leftCard3X3 from "../../assets/img/portfolio/evergisOnline/header/leftCard-3/leftCard-3@3x.png";
import leftCard4X1 from "../../assets/img/portfolio/evergisOnline/header/leftCard-4/leftCard-4.png";
import leftCard4X2 from "../../assets/img/portfolio/evergisOnline/header/leftCard-4/leftCard-4@2x.png";
import leftCard4X3 from "../../assets/img/portfolio/evergisOnline/header/leftCard-4/leftCard-4@3x.png";
import leftCard5X1 from "../../assets/img/portfolio/evergisOnline/header/leftCard-5/leftCard-5.png";
import leftCard5X2 from "../../assets/img/portfolio/evergisOnline/header/leftCard-5/leftCard-5@2x.png";
import leftCard5X3 from "../../assets/img/portfolio/evergisOnline/header/leftCard-5/leftCard-5@3x.png";
import rightCardX1 from "../../assets/img/portfolio/evergisOnline/header/rightCard/rightCard.png";
import rightCardX2 from "../../assets/img/portfolio/evergisOnline/header/rightCard/rightCard@2x.png";
import rightCardX3 from "../../assets/img/portfolio/evergisOnline/header/rightCard/rightCard@3x.png";
import pointX1 from "../../assets/img/portfolio/evergisOnline/header/point/point.png";
import pointX2 from "../../assets/img/portfolio/evergisOnline/header/point/point@2x.png";
import pointX3 from "../../assets/img/portfolio/evergisOnline/header/point/point@3x.png";

import { ReactComponent as Ic1 } from "../../assets/img/portfolio/evergisOnline/features-icons/ic-1.svg";
import { ReactComponent as Ic2 } from "../../assets/img/portfolio/evergisOnline/features-icons/ic-2.svg";
import { ReactComponent as Ic3 } from "../../assets/img/portfolio/evergisOnline/features-icons/ic-3.svg";
import { ReactComponent as Ic4 } from "../../assets/img/portfolio/evergisOnline/features-icons/ic-4.svg";
import { ReactComponent as Ic5 } from "../../assets/img/portfolio/evergisOnline/features-icons/ic-5.svg";
import { ReactComponent as Ic6 } from "../../assets/img/portfolio/evergisOnline/features-icons/ic-6.svg";

import styles, { EvergisOnlineContainer, FiguresTitle } from "../../styles/evergisOnline";

const images = [
  { x1: appX1, x2: appX2, x3: appX3 },
  { x1: leftCard1X1, x2: leftCard1X2, x3: leftCard1X3 },
  { x1: leftCard2X1, x2: leftCard2X2, x3: leftCard2X3 },
  { x1: leftCard3X1, x2: leftCard3X2, x3: leftCard3X3 },
  { x1: leftCard4X1, x2: leftCard4X2, x3: leftCard4X3 },
  { x1: leftCard5X1, x2: leftCard5X2, x3: leftCard5X3 },
  { x1: pointX1, x2: pointX2, x3: pointX3 },
  { x1: rightCardX1, x2: rightCardX2, x3: rightCardX3 },
];

const justDoIt = [
  { Icon: Ic1, text: "Создавайте веб-карты" },
  { Icon: Ic2, text: "Анализируйте географические данные" },
  { Icon: Ic3, text: "Делитесь результатами с друзьями и коллегами" },
  { Icon: Ic4, text: "Открытый и бесплатный сервис" },
  { Icon: Ic5, text: "Работает через браузер" },
  { Icon: Ic6, text: "Не требует специальных навыков" },
];

class EvergisOnline extends Component {
  static defaultProps = {
    projectId: "evergisOnline",
  };

  state = {
    ratio: "x1",
    animate: false,
  };

  componentDidMount() {
    this.setState({ ratio: getPixelRatioPropName() });
  }

  render() {
    const { ratio, animate } = this.state;
    const { location, projectId } = this.props;

    const evergisOnline = getProject({ projectId });
    const { longreadImages } = evergisOnline;

    const imagesWithRatio = images.map(img => img[ratio]);

    return (
      <>
        <Header
          images={imagesWithRatio}
          onLoad={() => this.setState({ animate: true })}
          animate={animate}
          rightSide={<HeaderRightSide animate={animate} images={imagesWithRatio} />}
          containerClassName={styles.header}
          backgroundImage={`url(${patternImg})`}
          leftSideClassName={styles.headerLeftSide}
          projectId={projectId}
          location={location}
          {...evergisOnline}
        />
        <EvergisOnlineContainer>
          <Section>
            <Article>
              <Paragraph>
                <OutsideLink>EverGIS Online</OutsideLink> — это картографический сервис, который
                позволяет оценить местность по различным параметрам. Он будет полезен тем, кто хочет
                открыть бизнес и планирует провести экономический анализ территории в масштабах
                района, города или целой страны. Тем, кто проводит социологические исследования и
                заинтересован в гибком анализе социальных изменений конкретных территорий. Тем, кто
                изучает природные явления. И даже для тех, кто занимается развитием и обновлением
                городской среды и заинтересован в детальном изучении транспортной сети перед
                проектированием новой дороги или объектов инфраструктуры у нового жилого дома.
              </Paragraph>
              <FiguresTitle>
                Как использовать возможности карты в сервисе EverGIS Online — решать только вам!
              </FiguresTitle>
              <Figures figures={justDoIt} />
            </Article>
          </Section>
          <Section withoutPaddingTop className={styles.sectionWithScreenshots}>
            <Article>
              <H1 className={styles.mainTitle}>Как работать с EverGIS Online</H1>
              <ImageWithTitle
                title="Удобно и просто"
                src={longreadImages[0][ratio]}
                doubleBoxShadow
              />
              <Paragraph>
                Сервис прост и удобен в использовании. Он работает онлайн в любом браузере, не нужно
                устанавливать дополнительные программы и приложения. Специальные навыки работы в
                ГИС-системах не требуются. Доступ к сервису бесплатный. Нужно только пройти по
                ссылке и зарегистрироваться. В личном каталоге пользователя есть три вида ресурсов:
                данные, слои и карты. Карта - основная рабочая область пользователя, его проект.
              </Paragraph>
              <ImageWithTitle title="Все для создания карт" src={longreadImages[1][ratio]} />
              <Paragraph>
                Базовые инструменты сервиса — загрузка данных, создание и редактирование геобъектов,
                оформление данных, управление видимостью слоёв, измерение длин, площадей и
                периметров. В настройки оформления входит выбор готовых символов для объектов из
                библиотеки, загрузка изображений для создания новых символов, настройка цвета,
                размера и других параметров символов. Этого достаточно, чтобы создать красивую
                интерактивную карту.
              </Paragraph>
              <ImageWithTitle title="Анализ и геообработка данных" src={longreadImages[2][ratio]} />
              <Paragraph>
                В EverGIS Online можно строить буферные зоны, настраивать сложные классификации
                объектов в зависимости от их свойств и применять к классам готовые шаблоны
                оформления. Ориентироваться в большом объёме геоданных помогут функции
                пространственного поиска и фильтры на карте.
              </Paragraph>
              <ImageWithTitle
                title="Публикация, экспорт и совместная работа"
                src={longreadImages[3][ratio]}
              />
              <Paragraph>
                Готовыми интерактивными картами EverGIS Online можно поделиться в социальных сетях,
                отправить другу или коллеге по почте, разрешить копирование другим пользователям
                сервиса. А если вам нужна печатная карта, вы можете легко сохранить изображение в
                нужном разрешении.
              </Paragraph>
            </Article>
          </Section>
          <Footer />
        </EvergisOnlineContainer>
      </>
    );
  }
}

export default EvergisOnline;
