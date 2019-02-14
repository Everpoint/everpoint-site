import React, { Component } from "react";
import PropTypes from "prop-types";

import { ReactComponent as Arrow } from "../../../assets/img/icons/arrow.svg";
import { PrevBtn, NextBtn } from "../Simple/styles";
import { Nav, Page } from "./styles";

const LEFT_GAP_MIN_PAGE_COUNT = 2;
const RIGHT_GAP_MIN_PAGE_COUNT = 3;
const MIDBLOCK_MIN_PAGE_COUNT = 4;

export class PaginationFull extends Component {
  static propTypes = {
    slots: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number,
    pageCount: PropTypes.number,
  };

  static defaultProps = {
    slots: 5,
  };

  state = {
    midBlock: {
      start: 0,
      end: 0,
    },
  };

  componentDidMount() {
    const { currentPage, slots, pageCount } = this.props;
    this.setDefaultMidBlockInterval(currentPage, slots, pageCount);
  }

  componentDidUpdate(prevProps) {
    const { currentPage, slots, pageCount } = this.props;
    const oddSlots = slots % 2 === 0 ? slots - 1 : slots;
    if (prevProps.currentPage !== currentPage) {
      this.recalculateMidBlockInterval(currentPage, oddSlots, pageCount);
    }
  }

  setDefaultMidBlockInterval = (selected, slotCount, pageCount) => {
    slotCount = Math.max(slotCount % 2 === 0 ? slotCount - 1 : slotCount, 5);
    const midBlockInterval = slotCount - 4;
    const midBlockMaxPoint = pageCount - 2; // maximum number that midBlock could range
    const midBlockMinPoint = 3; // minimum number that midBlock could range
    const midBlockDitance = (midBlockInterval - 1) / 2; // distance to the middleBlock ends from the middle
    if (selected < midBlockMinPoint) {
      this.setState({
        midBlock: {
          start: midBlockMinPoint,
          end: midBlockMinPoint + midBlockInterval - 1,
        },
      });
      return;
    } else if (selected > midBlockMaxPoint) {
      this.setState({
        midBlock: {
          start: midBlockMaxPoint - midBlockInterval + 1,
          end: midBlockMaxPoint,
        },
      });
      return;
    } else {
      this.setState({
        midBlock: {
          start: Math.max(selected - midBlockDitance, midBlockMinPoint),
          end: Math.min(selected + midBlockDitance, midBlockMaxPoint),
        },
      });
    }
  };

  recalculateMidBlockInterval = (selected, slotCount, pageCount) => {
    const { midBlock } = this.state;
    const midBlockInterval = slotCount - 4; // 4 fixed positions
    const midBlockMaxPoint = pageCount - 2; // maximum number that midBlock could range
    const midBlockMinPoint = 3; // minimum number that midBlock could range
    if (selected <= midBlockMinPoint) {
      this.setState({
        midBlock: {
          start: midBlockMinPoint,
          end: midBlockMinPoint + midBlockInterval - 1,
        },
      });
      return;
    } else if (selected >= midBlockMaxPoint) {
      this.setState({
        midBlock: {
          start: pageCount - midBlockInterval - 1,
          end: midBlockMaxPoint,
        },
      });
      return;
    } else if (selected < midBlock.start && selected > midBlockMinPoint) {
      this.setState({
        midBlock: {
          start: Math.max(midBlock.start - midBlockInterval, midBlockMinPoint),
          end: Math.min(midBlock.start - 1, midBlockMaxPoint),
        },
      });
    } else if (selected > midBlock.end && selected < midBlockMaxPoint) {
      this.setState({
        midBlock: {
          start: Math.min(midBlock.end + midBlockInterval, midBlockMaxPoint) - midBlockInterval + 1,
          end: Math.min(midBlock.end + midBlockInterval, midBlockMaxPoint),
        },
      });
    }
  };

  handleLeftGapClick = currentPage => {
    const { midBlock } = this.state;
    const { onPageChange } = this.props;

    const nextPage =
      currentPage > midBlock.end
        ? midBlock.start - 1
        : currentPage - (midBlock.end - midBlock.start + 1);
    return onPageChange && onPageChange(Math.max(nextPage, 1));
  };

  handleRightGabClick = (currentPage, pageCount) => {
    const { midBlock } = this.state;
    const { onPageChange } = this.props;

    const nextPage =
      currentPage < midBlock.start
        ? midBlock.end + 1
        : currentPage + (midBlock.end - midBlock.start + 1);
    return onPageChange && onPageChange(Math.min(nextPage, pageCount));
  };

  renderMidBlock = (selected, onPageClick) => {
    const { midBlock } = this.state;
    const interval = midBlock.end - midBlock.start + 1;
    return Array.from({ length: interval }, (_, i) => midBlock.start + i).map(el => (
      <Page key={el} selected={selected === el} onClick={() => onPageClick && onPageClick(el)}>
        {el}
      </Page>
    ));
  };
  showRightGap = pageCount => {
    const minPage = 5; // min pages count to show right gap
    const midBlockMaxPoint = pageCount - 2;
    return pageCount > minPage && this.state.midBlock.end < midBlockMaxPoint;
  };

  showLeftGap = () => this.state.midBlock.start > 3;

  render() {
    const { currentPage, pageCount, onPageChange, className } = this.props;
    const { midBlock } = this.state;
    const nextPage = currentPage + 1;
    const prevPage = currentPage - 1;
    const penultPage = pageCount - 1;

    return (
      <Nav className={className}>
        <PrevBtn
          dark
          disabled={currentPage <= 1}
          onClick={() => currentPage > 1 && onPageChange && onPageChange(prevPage)}
        >
          <Arrow />
        </PrevBtn>
        <Page selected={currentPage === 1} onClick={() => onPageChange && onPageChange(1)}>
          1
        </Page>
        {this.showLeftGap() ? (
          <Page
            selected={false}
            onClick={() =>
              midBlock.start === 3
                ? onPageChange && onPageChange(2)
                : this.handleLeftGapClick(currentPage)
            }
          >
            ...
          </Page>
        ) : (
          pageCount > LEFT_GAP_MIN_PAGE_COUNT && (
            <Page
              selected={currentPage === LEFT_GAP_MIN_PAGE_COUNT}
              onClick={() => onPageChange && onPageChange(LEFT_GAP_MIN_PAGE_COUNT)}
            >
              2
            </Page>
          )
        )}
        {pageCount > MIDBLOCK_MIN_PAGE_COUNT && this.renderMidBlock(currentPage, onPageChange)}
        {this.showRightGap(pageCount) ? (
          <Page selected={false} onClick={() => this.handleRightGabClick(currentPage, pageCount)}>
            ...
          </Page>
        ) : (
          pageCount > RIGHT_GAP_MIN_PAGE_COUNT && (
            <Page
              selected={currentPage === penultPage}
              onClick={() => onPageChange && onPageChange(penultPage)}
            >
              {penultPage}
            </Page>
          )
        )}
        <Page
          selected={currentPage === pageCount}
          onClick={() => onPageChange && onPageChange(pageCount)}
        >
          {pageCount}
        </Page>
        <NextBtn
          dark
          disabled={currentPage >= pageCount}
          onClick={() => currentPage < pageCount && onPageChange && onPageChange(nextPage)}
        >
          <Arrow />
        </NextBtn>
      </Nav>
    );
  }
}
