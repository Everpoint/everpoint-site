import React, { PureComponent } from "react";

import { OutsideLink } from "../../components/OutsideLink/OutsideLink";
import { MspRightSide } from "../../components/MspLongread/MspRightSide/MspRightSide";
import { Header } from "../../components/PortfolioLongreadHeader/Header";
import { Paragraph } from "../../components/Typography/Paragraph";
import { Section } from "../../components/Elements/Section";
import { Article } from "../../components/Elements/Article";
import { H1 } from "../../components/Typography/Headlines";
import { TaglineAwards } from "../../components/TaglineAwards/TaglineAwards";
import { MspRegionMap } from "../../components/MspLongread/MspRegionMap/MspRegionMap";
import { MspVideo } from "../../components/MspLongread/MspVideo/MspVideo";
import { VideoContainer } from "../../components/LongreadAtoms/VideoContainer";
import { InViewVideo } from "../../components/Video/InViewVideo";
import { UnorderedList } from "../../components/Typography/UnorderedList";
import step2Video from "../../videos/msp/2.mp4";
import step2VideoPoster from "../../videos/msp/posters/2_000.jpg";
import step3Video from "../../videos/msp/3.mp4";
import step3VideoPoster from "../../videos/msp/posters/3_000.jpg";
import step4Video from "../../videos/msp/4.mp4";
import step4VideoPoster from "../../videos/msp/posters/4_000.jpg";
import step5Video from "../../videos/msp/5.mp4";
import step5VideoPoster from "../../videos/msp/posters/5_000.jpg";
import { MspAnalyticsSection } from "../../components/MspLongread/MspAnalyticsSection/MspAnalyticsSection";
import { MspFooter } from "../../components/MspLongread/MspFooter/MspFooter";
import { getProject } from "../../routes";

import layer1 from "../../assets/img/portfolio/msp/layer-1.png";
import layer2 from "../../assets/img/portfolio/msp/layer-2.png";
import layer3 from "../../assets/img/portfolio/msp/layer-3.png";

import cardLeft1 from "../../assets/img/portfolio/msp/cards/Left-1@2x.png";
import cardLeft2 from "../../assets/img/portfolio/msp/cards/Left-2@2x.png";
import cardLeft3 from "../../assets/img/portfolio/msp/cards/Left-3@2x.png";
import cardLeft4 from "../../assets/img/portfolio/msp/cards/Left-4@2x.png";

import cardRight1 from "../../assets/img/portfolio/msp/cards/Right-1@2x.png";
import cardRight2 from "../../assets/img/portfolio/msp/cards/Right-2@2x.png";
import cardRight3 from "../../assets/img/portfolio/msp/cards/Right-3@2x.png";
import cardRight4 from "../../assets/img/portfolio/msp/cards/Right-4@2x.png";

import styles, { MspLongreadContainer, Step } from "../../styles/msp";

const images = [
  layer1,
  layer2,
  layer3,
  cardLeft1,
  cardLeft2,
  cardLeft3,
  cardLeft4,
  cardRight1,
  cardRight2,
  cardRight3,
  cardRight4,
];

class Msp extends PureComponent {
  static defaultProps = {
    projectId: "msp",
  };

  state = {
    animate: false,
  };

  render() {
    const { animate } = this.state;
    const { location, projectId } = this.props;
    const msp = getProject({ projectId });
    const mobileMsp = getProject({ projectId: "mobileMsp" });
    const { ios, android, id } = mobileMsp;
    const { link, achievements, videos } = msp;

    return (
      <>
        <Header
          animate={animate}
          images={images}
          onLoad={() => this.setState({ animate: true })}
          projectId={projectId}
          leftSideClassName={styles.headerLeftSide}
          location={location}
          {...msp}
          rightSide={<MspRightSide animate={animate} images={images} />}
        />
        <MspLongreadContainer>
          <Section withoutPaddingBottom>
            <Article>
              <H1 portfolio>Предыстория</H1>
              <Paragraph>
                Развитие малого и среднего бизнеса в России идет очень активно. Для помощи
                Корпорации МСП, занимающейся вопросами поддержки начинающих и действующих
                предпринимателей, мы разработали геомаркетинговый сервис «
                <OutsideLink href={link}>Бизнес-навигатор МСП</OutsideLink>».
              </Paragraph>
              <Paragraph>
                В 2018 году сервис получил премию{" "}
                <OutsideLink href="tagline.ru/cases/razrabotka-veb-servisa-dlya-poiska-mesta-dlya-biznesa-i-rascheta-biznes-plana--biznes-navigator-msp/">
                  Tagline Awards
                </OutsideLink>{" "}
                - 3 место в категории лучший инновационный сервис и лучший сервис для
                digital-маркетинга.
              </Paragraph>
              <TaglineAwards />
              <Paragraph>
                Сервис абсолютно бесплатный. Он разработан на базе нашей современной
                многофункциональной веб-платформы EverGIS. Сервис помогает найти наиболее
                привлекательное местоположение для открытия бизнеса в конкретном городе и рассчитать
                примерный бизнес-план. Учитывает отраслевую принадлежность бизнеса, рыночную нишу,
                конкурентное окружение, характеристики спроса и предложения на выбранной территории,
                доступные объекты коммерческой, государственной и муниципальной недвижимости для
                размещения бизнеса.
              </Paragraph>
              <MspRegionMap achievements={achievements} />
            </Article>
            <Article>
              <H1 portfolio>Работа в системе «Бизнес-навигатор МСП»</H1>
              <Paragraph>
                Воспользоваться сервисом могут как начинающие предприниматели, так и действующие
                бизнесмены. Работать с «Бизнес-навигатором МСП» можно в браузере и в мобильном
                приложении. Получить детализированный типовой бизнес-план возможно после выполнения
                5 простых шагов.
              </Paragraph>
            </Article>
          </Section>
          <MspVideo videos={videos} />
          <Section withoutPaddingBottom withoutPaddingTop>
            <Article>
              <UnorderedList aria-label="Сначала пользователь должен выбрать:">
                <li>Город, в котором собирается открывать или развивать бизнес</li>
                <li>Одну из 103 отраслевых концепций бизнеса из каталога сервиса</li>
              </UnorderedList>
              <Paragraph>
                Карта привлекательности территории города для открытия бизнеса и каталог отраслевых
                концепций подскажут, где и какой бизнес открывать, какие вложения потребуются
              </Paragraph>
            </Article>
          </Section>
          <Section withoutPaddingBottom>
            <Article>
              <Step>
                <span>Шаг 2</span>Выбор месторасположения бизнеса по параметрам
              </Step>
              <VideoContainer>
                <InViewVideo source={step2Video} poster={step2VideoPoster} />
              </VideoContainer>
              <Paragraph>Следующий шаг - выбор месторасположения бизнеса.</Paragraph>
              <Paragraph>
                Пользователь может посмотреть на карте потенциальных конкурентов, предложения по
                продаже и покупке недвижимости: государственной и коммерческой.
              </Paragraph>
            </Article>
          </Section>
          <Section withoutPaddingBottom>
            <Article>
              <Step>
                <span>Шаг 3</span>Расчет зон влияния и конкуренции
              </Step>
              <VideoContainer>
                <InViewVideo source={step3Video} poster={step3VideoPoster} />
              </VideoContainer>
              <Paragraph>
                Пользователь выбирает зинтересовавшие его место на карте, оценивает территорию.
              </Paragraph>
              <Paragraph>
                Система строит зоны влияния и конкуренции, оценивает спрос и предложение, показывает
                прямых и косвенных конкурентов, разделяя их на сетевых и несетевых.
              </Paragraph>
              <Paragraph>
                Сервис также предупредит о нерентабельности бизнеса в выбранном месте. На этом этапе
                местоположение можно изменить.
              </Paragraph>
            </Article>
          </Section>
          <Section withoutPaddingBottom>
            <Article>
              <Step>
                <span>Шаг 4</span>Изучение характеристик рыночной ниши
              </Step>
              <VideoContainer>
                <InViewVideo source={step4Video} poster={step4VideoPoster} />
              </VideoContainer>
              <Paragraph>
                "Бизнес-навигатор МСП" позволяет изучить характеристики рыночной ниши в выбранной
                локации: структуру постоянно проживающего населения и дневного пешего потока
                (офисные служащие), структуру потребления конкретной услуги или товара.
              </Paragraph>
              <Paragraph>
                Например, показатели среднего чека, количество офичных служащих и бизнес-центров,
                информацию о доходах.
              </Paragraph>
            </Article>
          </Section>
          <Section>
            <Article>
              <Step>
                <span>Шаг 5</span>Расчёт бизнес-плана
              </Step>
              <VideoContainer>
                <InViewVideo source={step5Video} poster={step5VideoPoster} />
              </VideoContainer>
              <Paragraph>
                На этом шаге сервис автоматически формирует детальный типовой бизнес-план открытия
                бизнеса в выбранном месте. Его можно скачат в PDF и Excel. Полученный документ в PDF
                можно без изменений направить в "МСП Банк" в составе заявки на кредит на льготных
                условиях.
              </Paragraph>
            </Article>
          </Section>
          <MspAnalyticsSection />
          <Section className={styles.calculateBusinessPlanRightNow}>
            <Article>
              <Step>Рассчитайте бизнес-план прямо-сейчас!</Step>
              <OutsideLink href={link}>{link}</OutsideLink>
            </Article>
          </Section>
          <MspFooter ios={ios} android={android} id={id} />
        </MspLongreadContainer>
      </>
    );
  }
}

export default Msp;
