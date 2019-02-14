import React, { Component } from "react";
import PropTypes from "prop-types";

import { TransitionCard } from "./TransitionCard";
import { PaginationSimple } from "../../components/Pagination/Simple/PaginationSimple";
import { BackendComponent } from "../../components/Backend/Backend";
import { JobsCardSwiper } from "./styles";

const flattenItems = sections => {
  const array = [];
  sections &&
    sections.forEach(({ items, id }) => {
      if (id === "process" || items.length === 0) {
        array.push({
          parentId: id,
          id: id,
        });
      } else {
        items.forEach((item, index) => {
          const itemId = `${index}-${id}`;

          if (typeof item === "string" || item instanceof String) {
            array.push({ parentId: id, photo: item, id: itemId });
          } else {
            array.push({ parentId: id, ...item, id: itemId });
          }
        });
      }
    });
  return array;
};

export class JobsCard extends Component {
  static propTypes = {
    sections: PropTypes.arrayOf(PropTypes.object),
    selectedSectionIndex: PropTypes.number,
    onSectionChange: PropTypes.func,
    isSwipeEvent: PropTypes.bool,
    sectionDirection: PropTypes.number,
  };

  static getDerivedStateFromProps({ sections, selectedSectionIndex }, { items: prevItems }) {
    if (prevItems.length === 0) {
      return {
        items: flattenItems(sections),
      };
    }

    return null;
  }

  state = {
    items: [],
    selectedItemsIndex: 0,
    direction: 1,
  };

  componentDidMount() {
    const { items } = this.state;
    const { sections, selectedSectionIndex } = this.props;
    const section = sections[selectedSectionIndex];

    if (section) {
      const index = items.findIndex(({ parentId }) => parentId === section.id);
      this.setState({
        selectedItemsIndex: index,
      });
    }
  }

  shouldComponentUpdate(
    { selectedSectionIndex: nextSelectedSectionIndex },
    { selectedItemsIndex: nextSelectedItemsIndex },
  ) {
    const { selectedItemsIndex } = this.state;
    const { selectedSectionIndex } = this.props;

    return (
      selectedItemsIndex !== nextSelectedItemsIndex ||
      selectedSectionIndex !== nextSelectedSectionIndex
    );
  }

  componentDidUpdate({ selectedSectionIndex: prevSelectedSectionIndex }, prevState) {
    const { selectedSectionIndex, sections, isSwipeEvent, sectionDirection } = this.props;
    const { items } = this.state;

    if (prevSelectedSectionIndex !== selectedSectionIndex) {
      const section = sections[selectedSectionIndex];

      if (section && !isSwipeEvent) {
        const index = items.findIndex(({ parentId }) => parentId === section.id);
        this.setState({
          direction: sectionDirection,
          selectedItemsIndex: index,
        });
      }
    }
  }

  onSwiped = ({ isLeft, isRight, xRatio }) => {
    const { items, selectedItemsIndex } = this.state;
    const { sections, selectedSectionIndex, onSectionChange } = this.props;

    const section = sections[selectedSectionIndex];

    if (isLeft && xRatio > 25) {
      const isLastCard = items.length - 1 === selectedItemsIndex;
      const nextItem = items[selectedItemsIndex + 1];
      const sectionIsChange = section && nextItem && section.id !== nextItem.parentId;

      if (!isLastCard) {
        this.setState(
          {
            direction: 1,
            selectedItemsIndex: selectedItemsIndex + 1,
          },
          () => {
            if (sectionIsChange) {
              onSectionChange({ value: 1, isSwipeEvent: true });
            }
          },
        );
      }
    } else if (isRight && xRatio > 25) {
      if (selectedItemsIndex) {
        const prevItem = items[selectedItemsIndex - 1];
        const sectionIsChange = section && prevItem && section.id !== prevItem.parentId;

        this.setState(
          {
            direction: -1,
            selectedItemsIndex: selectedItemsIndex - 1,
          },
          () => {
            if (sectionIsChange) {
              onSectionChange({ value: -1, isSwipeEvent: true });
            }
          },
        );
      }
    }
  };

  onPageChange = page => {
    const { selectedItemsIndex } = this.state;

    if (page > selectedItemsIndex) {
      this.onSwiped({ isLeft: true, xRatio: 100 });
    } else {
      this.onSwiped({ isRight: true, xRatio: 100 });
    }
  };

  render() {
    const { items, selectedItemsIndex, direction } = this.state;
    const { sections, selectedSectionIndex, isSwipeEvent } = this.props;
    const section = sections[selectedSectionIndex];
    const item = items[selectedItemsIndex];

    return (
      <JobsCardSwiper onSwiped={this.onSwiped}>
        <TransitionCard
          direction={direction}
          card={item}
          section={section}
          isSwipeEvent={isSwipeEvent}
        />
        <BackendComponent sections={items} selectedSectionIndex={selectedItemsIndex} />
        <PaginationSimple
          pageCount={items.length}
          currentPage={selectedItemsIndex + 1}
          onPageChange={this.onPageChange}
        />
      </JobsCardSwiper>
    );
  }
}
