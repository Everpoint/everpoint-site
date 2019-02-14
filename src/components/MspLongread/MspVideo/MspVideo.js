import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Transition, TransitionGroup } from "react-transition-group";

import { VideoContainer } from "../../LongreadAtoms/VideoContainer";
import { transition, VideoTransition, slideLeft } from "./styles";
import { fade } from "../../Transition/animation";
import { InViewVideo } from "../../Video/InViewVideo";
import { Article } from "../../../components/Elements/Article";
import { Section } from "../../../components/Elements/Section";
import styles, { Step } from "../../../styles/msp";
import { Scrollbar } from "../../Scrollbar/Scrollbar";
import { Selector } from "../../Selector/Selector";

export class MspVideo extends PureComponent {
  static propTypes = {
    videos: PropTypes.arrayOf(PropTypes.object),
  };

  state = {
    selectedVideoIndex: 0,
  };

  render() {
    const { selectedVideoIndex } = this.state;
    const { videos } = this.props;
    const { source, poster } = videos[selectedVideoIndex];

    return (
      <>
        <Section withoutPaddingBottom>
          <Article>
            <Step>
              <span>Шаг 1</span>Выбор территории для ведения бизнеса
            </Step>
            <VideoContainer className={styles.mspVideoWithControl}>
              <TransitionGroup appear>
                <Transition
                  key={`${selectedVideoIndex}-msp-video`}
                  timeout={{
                    enter: 100,
                    exit: 200,
                  }}
                >
                  {status => (
                    <VideoTransition
                      className={cn(slideLeft[status], fade[status], transition[status])}
                    >
                      <InViewVideo video={source} poster={poster} />
                    </VideoTransition>
                  )}
                </Transition>
              </TransitionGroup>
            </VideoContainer>
          </Article>
        </Section>
        <Section className={styles.selectorSection}>
          <Scrollbar className={styles.selectorSectionScrollbar}>
            <Selector
              className={styles.selectorContainer}
              items={videos}
              selectedIndex={selectedVideoIndex}
              onChange={index => this.setState({ selectedVideoIndex: index })}
            />
          </Scrollbar>
        </Section>
      </>
    );
  }
}
