import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Transition, TransitionGroup } from "react-transition-group";

import { format } from "../../utils/date";
import { OutsideLink } from "../../components/OutsideLink/OutsideLink";
import { Swiper } from "../../components/Swiper/Swiper";
import styles, { AboutCardContainer, Title, Date as DateBlock, Description, Logo } from "./styles";
import { slideDown, slideLeft, slideRight, slideUp, transition } from "../PortfolioSlide/styles";
import { fade } from "../../components/Transition/animation";

export class News extends PureComponent {
  render() {
    const {
      status,
      direction,
      disableTransition,
      description,
      title,
      date,
      logo,
      isSwipeEvent,
      link,
    } = this.props;

    const animation = isSwipeEvent
      ? direction > 0
        ? slideLeft[status]
        : slideRight[status]
      : direction > 0
      ? slideUp[status]
      : slideDown[status];

    return (
      <AboutCardContainer
        disableTransition={disableTransition}
        className={cn(animation, fade[status], transition[status])}
      >
        <Title>{title}</Title>
        <DateBlock>{format(date)}</DateBlock>
        <Description>
          {description}{" "}
          {link && (
            <OutsideLink href={link} className={styles.read}>
              Читать
            </OutsideLink>
          )}
        </Description>
        {logo && <Logo src={logo} alt="logo" />}
      </AboutCardContainer>
    );
  }
}

export class NewsCard extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    logo: PropTypes.string,
    id: PropTypes.string,
    direction: PropTypes.number,
    isSwipeEvent: PropTypes.bool,
    disableTransition: PropTypes.bool,
  };

  onSwiped = ({ isLeft, isRight, xRatio }) => {
    const { onSectionChange } = this.props;

    if (isLeft && xRatio > 25) {
      onSectionChange({ value: 1, isSwipeEvent: true });
    } else if (isRight && xRatio > 25) {
      onSectionChange({ value: -1, isSwipeEvent: true });
    }
  };

  render() {
    const { direction, title, date, description, logo, id } = this.props;

    return (
      <Swiper onSwiped={this.onSwiped}>
        <TransitionGroup appear>
          <Transition
            key={`${id}-news-${direction}`}
            timeout={{
              enter: 100,
              exit: 200,
            }}
          >
            {status => (
              <News
                {...this.props}
                status={status}
                date={date}
                logo={logo}
                title={title}
                description={description}
              />
            )}
          </Transition>
        </TransitionGroup>
      </Swiper>
    );
  }
}
