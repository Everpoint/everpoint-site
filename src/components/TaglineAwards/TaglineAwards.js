import React, { PureComponent } from "react";

import { Reward } from "./Reward/Reward";
import { TaglineAwardsContainer, TaglineAwardsBlock, Title } from "./styles";

export class TaglineAwards extends PureComponent {
  render() {
    return (
      <TaglineAwardsContainer>
        <Title>Сервис регулярно занимает призовые места в престижных digital-премиях</Title>
        <TaglineAwardsBlock>
          <Reward
            place={1}
            title="Золотой сайт : 1 место"
            description="Поддержка малого и среднего бизнеса в России"
          />
          <Reward
            place={3}
            title="TAGLINE : Бронза"
            description="Лучший сервис для digital-маркетинга"
          />
          <Reward place={3} title="TAGLINE : Бронза" description="Лучший инновационный сервис" />
        </TaglineAwardsBlock>
      </TaglineAwardsContainer>
    );
  }
}
