import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Transition, TransitionGroup } from "react-transition-group";

import { format } from "../../utils/date";
import { OutsideLink } from "../../components/OutsideLink/OutsideLink";
import styles, { AboutCardContainer, Title, Date as DateBlock, Description, Logo } from "./styles";
import { slideDown, slideUp, transition } from "../../styles/transition";
import { fade } from "../../components/Transition/animation";

export class News extends PureComponent {
  render() {
    const { status, direction, description, title, date, logo, link } = this.props;

    const animation = direction > 0 ? slideUp[status] : slideDown[status];

    return (
      <AboutCardContainer className={cn(animation, fade[status], transition[status])}>
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
  };

  render() {
    const { title, date, description, logo, id } = this.props;

    return (
      <>
        <TransitionGroup>
          <Transition
            key={`${id}-news-card`}
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
      </>
    );
  }
}
