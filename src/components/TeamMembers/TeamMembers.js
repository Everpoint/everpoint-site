import React, { Component } from "react";
import PropTypes from "prop-types";

import { rateLimit } from "../../utils/number";
import { NoVacancyCard } from "./NoVacancyCard";
import { GoNextLink } from "../../components/GoNextLink/GoNextLink";
import { TeamMemberCard } from "../../components/TeamMemberCard/TeamMemberCard";
import { TeamMembersContainer, PhotoContainer } from "./styles";
import { HowWeAreWorking } from "../HowWeAreWorking/HowWeAreWorking";

function getColumns({ items }) {
  const newArray = items.slice();

  const firstCol = [];
  const lastCol = [];
  newArray.forEach((item, i) => (i % 2 ? lastCol.push(item) : firstCol.push(item)));
  return firstCol.concat(lastCol);
}

export class TeamMembers extends Component {
  static propTypes = {
    items: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.arrayOf(PropTypes.string),
    ]),
    id: PropTypes.string,
    onSectionChange: PropTypes.func,
    selectedId: PropTypes.string,
  };

  state = {
    cardHeight: 320,
    photoHeight: 225,
    margin: 30,
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  shouldComponentUpdate({ selectedId: nextSelectedId }, { cardHeight: nextCardHeight }) {
    const { cardHeight } = this.state;
    const { selectedId, id } = this.props;

    return (
      (selectedId !== nextSelectedId && (nextSelectedId === id || selectedId === id)) ||
      cardHeight !== nextCardHeight
    );
  }

  static defaultProps = {
    items: [],
  };

  onResize = () => {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewportWidth <= 992) {
      this.setState({ cardHeight: 320, photoHeight: 164, margin: 30 });
    } else {
      this.setState({ cardHeight: 320, photoHeight: 225, margin: 20 });
    }
  };

  render() {
    const { cardHeight, photoHeight, margin: marginFromState } = this.state;
    const { items, id, selectedId } = this.props;
    const isVisible = id === selectedId;
    const isVacancy = id === "vacancy";
    const isPhoto = id === "photo";
    const data = getColumns({ items });
    const margin = data.length > 2 ? marginFromState : 0;
    const height = isPhoto ? photoHeight : cardHeight;
    const top = height / 2;
    const half = Math.round(data.length / 2);
    const containerHeight =
      data.length > 2
        ? Math.ceil(data.length / 2) * (height + margin) +
          (data.length % 2 === 0 ? height / 2 : 0) +
          20
        : rateLimit(Math.ceil(data.length / 2), 1) * height + 4;

    const noVacancies = isVacancy && items && items.length === 0;

    if (id === "process") {
      return (
        <TeamMembersContainer isVisible={isVisible}>
          <HowWeAreWorking items={items} />
        </TeamMembersContainer>
      );
    }

    return (
      <TeamMembersContainer
        isVisible={isVisible}
        oneItem={data.length <= 1}
        style={{ height: containerHeight + "px" }}
      >
        {noVacancies ? (
          <NoVacancyCard />
        ) : (
          data.map((item, index) => {
            if (isPhoto) {
              const key = `photo-${index + 1}`;
              return (
                <PhotoContainer
                  style={{ marginTop: index === half && top, height, marginBottom: margin }}
                  key={key}
                >
                  <img src={item} alt={key} />
                </PhotoContainer>
              );
            }

            return (
              <TeamMemberCard
                control={
                  isVacancy ? (
                    <GoNextLink gatsby to={item.longreadLink}>
                      Описание вакансии
                    </GoNextLink>
                  ) : null
                }
                avatar={item.avatar}
                vacancy={isVacancy}
                withMarginTop={index === half}
                height={height}
                top={top}
                margin={data.length > 1 ? margin : 0}
                key={item.id}
                {...item}
              />
            );
          })
        )}
      </TeamMembersContainer>
    );
  }
}
