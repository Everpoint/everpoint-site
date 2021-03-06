import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { BnIconsParallax } from "../../../components/MobileMspLongread/IconsParallax/BnIconsParallax/BnIconsParallax";
import { SupportIconsParallax } from "../../../components/MobileMspLongread/IconsParallax/SupportIconsParallax/SupportIconsParallax";
import { VideoInMobileMockup } from "../VideoInMobileMockup/VideoInMobileMockup";
import { OutsideLink } from "../../../components/OutsideLink/OutsideLink";
import { Article } from "../../../components/Elements/Article";
import { Section } from "../../../components/Elements/Section";
import { H2, H3 } from "../../Typography/Headlines";
import { Paragraph } from "../../Typography/Paragraph";
import { UnorderedList } from "../../Typography/UnorderedList";
import { msp, support } from "../SectionWithIcon/SectionWithIcon";
import { Top1 } from "../Top1/Top1";

import poster1 from "../../../videos/mobileMsp/posters/BN_mobile_1_000.jpg";
import poster2 from "../../../videos/mobileMsp/posters/BN_mobile_2_000.jpg";
import poster3 from "../../../videos/mobileMsp/posters/MP_mobile1_000.jpg";
import poster4 from "../../../videos/mobileMsp/posters/MP_mobile2_000.jpg";
import video1 from "../../../videos/mobileMsp/BN_mobile_1.mp4";
import video2 from "../../../videos/mobileMsp/BN_mobile_2.mp4";
import video3 from "../../../videos/mobileMsp/MP_mobile1.mp4";
import video4 from "../../../videos/mobileMsp/MP_mobile2.mp4";

import styles, { BnBlock, WithVideoContent } from "./styles";

export class BnSection extends Component {
  static propTypes = {
    ratio: PropTypes.string,
  };

  render() {
    const { ratio } = this.props;

    return (
      <>
        <Section withoutPaddingBottom>
          <Article>
            <BnBlock>
              <img src={msp[ratio]} alt="bn logo" />
              <figure>
                <H2 small>Бизнес-навигатор МСП</H2>
                <Paragraph>
                  В основе расчетов лежит гигантский массив данных: это опыт 5000 успешных компаний
                  малого бизнеса (а это 103 вида бизнеса) из 177 городов России, а также реальные
                  сведения о потреблении определенных товаров и услуг. Вся информация регулярно
                  обновляется.
                </Paragraph>
              </figure>
            </BnBlock>
            <Top1 ratio={ratio} />
            <Paragraph className={styles.top1Paragraph}>
              Приложение «Бизнес-навигатор МСП» в{" "}
              <OutsideLink
                style={{ color: "#67bcdc" }}
                href="http://2017.goldensite.ru/work/best-app-for-business-b2b/4459"
              >
                конкурсе GoldenApp 2017
              </OutsideLink>{" "}
              получило первое место в категории «Лучшее приложение для бизнеса (b2b)». Этот помощник
              бизнесмена поможет найти наилучшее месторасположение для бизнеса и оперативно
              рассчитает типовой бизнес-план.
            </Paragraph>
          </Article>
        </Section>
        <BnIconsParallax className={styles.firstBlockWithVideos}>
          <Section className={cn(styles.bnWithVideo, styles.bnWithVideoLeft)}>
            <Article>
              <H3>Минимум исходных данных</H3>
              <WithVideoContent className={styles.mobilePortraitOrder2}>
                <H3>Минимум исходных данных</H3>
                <Paragraph>
                  Чтобы рассчитать в приложении примерный бизнес-план, достаточно выбрать вид
                  бизнеса, место на карте и указать несколько дополнительных параметров:
                </Paragraph>
                <UnorderedList lightGreyBlue>
                  <li>рыночную нишу,</li>
                  <li>потребность в кредите,</li>
                  <li>организационно-правовую форму будущего бизнеса,</li>
                  <li>систему налогообложения.</li>
                </UnorderedList>
                <Paragraph>
                  Приложение оценит спрос и существующее предложение в выбранном месте.
                  Предприниматель сможет увидеть на карте потенциальных конкурентов, а также сможет
                  подобрать подходящее помещение в зависимости от масштаба бизнеса.
                </Paragraph>
                <Paragraph>
                  Понравившуюся недвижимость можно сохранить в избранное, дополнить фотографиями и
                  комментариями.
                </Paragraph>
              </WithVideoContent>
              <VideoInMobileMockup
                className={styles.mobilePortraitOrder1}
                ratio={ratio}
                video={video1}
                poster={poster1}
              />
            </Article>
          </Section>
          <Section className={cn(styles.bnWithVideo, styles.bnWithVideoRight)}>
            <Article>
              <H3>Детальный бизнес-план</H3>
              <VideoInMobileMockup mockUpLeft ratio={ratio} video={video2} poster={poster2} />
              <WithVideoContent>
                <H3>Детальный бизнес-план</H3>
                <Paragraph>
                  Результатом работы, как и в веб-версии системы «Бизнес-навигатор МСП», станет
                  типовой бизнес-план. Приложение само рассчитает бизнес-план на основе индикаторов
                  рынка и практики ведения бизнеса.
                </Paragraph>
                <Paragraph>
                  В один документ приложение соберет все характеристики бизнеса:
                </Paragraph>
                <UnorderedList lightGreyBlue>
                  <li>срок окупаемости,</li>
                  <li>объем вложений,</li>
                  <li>примерные доходы,</li>
                  <li>информацию о кредите (если он необходим),</li>
                  <li>адрес бизнес-точки,</li>
                  <li>сведения о потенциальных покупателях.</li>
                </UnorderedList>
                <Paragraph>
                  Приложение также предложит концепцию бизнеса: ассортимент, режим работы,
                  бизнес-модель и ключевой фактор успеха.
                </Paragraph>
                <Paragraph>
                  Бизнес-план можно сохранить в личном кабинете, скачать в PDF и поделиться им.
                  Такой бизнес-план принимают для рассмотрения заявок на кредит банки — партнеры
                  Корпорации МСП.
                </Paragraph>
              </WithVideoContent>
            </Article>
          </Section>
        </BnIconsParallax>
        <Section withoutPaddingBottom>
          <Article>
            <BnBlock>
              <img src={support[ratio]} alt="support logo" />
              <figure>
                <H2 small>Навигатор МСП. Меры поддержки</H2>
                <Paragraph>
                  Приложение «Навигатор МСП. Меры поддержки» рассчитано на опытных предпринимателей,
                  которые хотят расширить свой бизнес. Оно помогает найти сведения о финансовой и об
                  информационно-маркетинговой поддержке, а также о франшизах — нужно только выбрать
                  в приложении город. Вся информация регулярно обновляется.
                </Paragraph>
              </figure>
            </BnBlock>
          </Article>
        </Section>
        <Section className={cn(styles.bnWithVideo, styles.bnWithVideoRight)}>
          <Article>
            <H3>Меры поддержки</H3>
            <WithVideoContent className={styles.mobilePortraitOrder2}>
              <H3>Меры поддержки</H3>
              <Paragraph>
                Приложение покажет, есть ли в выбранном городе лизинговые и микрофинансовые
                организации, гарантийные фонды, предложит доступные для малого бизнеса программы
                кредитования от разных банков.
              </Paragraph>
              <Paragraph>
                Также предприниматели смогут узнать об инфраструктуре поддержки малого бизнеса:
              </Paragraph>
              <UnorderedList lightGreyBlue>
                <li>
                  о консультационной, в т. ч. о центрах поддержки сельского хозяйства, инноваций и
                  других отраслей,
                </li>
                <li>
                  об имущественной, например, о технопарках, о коворкингах, о бизнес-инкубаторах,
                </li>
                <li>о ближайших экспортных центрах,</li>
                <li>о центрах оказания госуслуг.</li>
              </UnorderedList>
            </WithVideoContent>
            <VideoInMobileMockup
              ratio={ratio}
              video={video3}
              poster={poster3}
              className={styles.mobilePortraitOrder1}
            />
          </Article>
        </Section>
        <SupportIconsParallax>
          <Section className={cn(styles.bnWithVideo, styles.bnWithVideoLeft)}>
            <Article>
              <H3>Каталог франшиз</H3>
              <VideoInMobileMockup mockUpLeft ratio={ratio} video={video4} poster={poster4} />
              <WithVideoContent>
                <H3>Каталог франшиз</H3>
                <Paragraph>
                  Для предпринимателей, которые хотят открыть бизнес по франшизе, в приложении есть
                  каталог с базовыми характеристиками:
                </Paragraph>
                <UnorderedList lightGreyBlue>
                  <li>сумма инвестиций,</li>
                  <li>срок окупаемости,</li>
                  <li>роялти,</li>
                  <li>количество точек,</li>
                  <li>минимально необходимая площадь.</li>
                </UnorderedList>
              </WithVideoContent>
            </Article>
          </Section>
        </SupportIconsParallax>
      </>
    );
  }
}
