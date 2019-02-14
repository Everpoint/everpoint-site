import React, { PureComponent } from "react";

import { ResponsiveSvg } from "../../components/Atoms/ResponsiveSvg";
import { ReactComponent as Loyalty } from "../../assets/img/icons/loyalty.svg";
import { ReactComponent as Badge } from "../../assets/img/portfolio/msp/tagline-awards-badge.svg";
import {
  TaglineAwardsContainer,
  TaglineAwardsBlock,
  TaglineAwardsLeftBlock,
  LoyaltyContainer,
  TaglineAwardsLeftText,
  TaglineAwardsCenterBlock,
  TaglineAwardsRightBlock,
} from "./styles";

export class TaglineAwards extends PureComponent {
  render() {
    return (
      <TaglineAwardsContainer>
        <TaglineAwardsBlock>
          <TaglineAwardsLeftBlock>
            <LoyaltyContainer>
              <ResponsiveSvg>
                <Loyalty />
              </ResponsiveSvg>
            </LoyaltyContainer>
            <TaglineAwardsLeftText>
              <span>Бронза</span>
              <span>Tagline Awards 2018</span>
            </TaglineAwardsLeftText>
          </TaglineAwardsLeftBlock>
          <TaglineAwardsCenterBlock>
            <span>Лучший сервис для digital-маркетинга</span>
            <span>Лучший инновационный сервис</span>
          </TaglineAwardsCenterBlock>
          <TaglineAwardsRightBlock>
            <ResponsiveSvg>
              <Badge />
            </ResponsiveSvg>
            <ResponsiveSvg>
              <Badge />
            </ResponsiveSvg>
          </TaglineAwardsRightBlock>
        </TaglineAwardsBlock>
      </TaglineAwardsContainer>
    );
  }
}
