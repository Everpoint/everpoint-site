import React, { Component } from "react";
import PropTypes from "prop-types";

import { ReactComponent as Arrow } from "../../../assets/img/icons/arrow.svg";
import { Container, PrevBtn, NextBtn, Amount } from "./styles";

export class PaginationSimple extends Component {
  static propTypes = {
    className: PropTypes.string,
    currentPage: PropTypes.number,
    pageCount: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
  };

  shouldComponentUpdate({ currentPage: nextCurrentPage, pageCount: nextPageCount }) {
    const { currentPage, pageCount } = this.props;

    return currentPage !== nextCurrentPage || pageCount !== nextPageCount;
  }

  render() {
    const { pageCount, currentPage, className, onPageChange } = this.props;

    return (
      <Container className={className}>
        <PrevBtn onClick={e => onPageChange(currentPage - 1, e)} disabled={currentPage === 1}>
          <Arrow />
        </PrevBtn>
        <Amount>{`${currentPage} / ${pageCount}`}</Amount>
        <NextBtn
          onClick={e => onPageChange(currentPage + 1, e)}
          disabled={currentPage === pageCount}
        >
          <Arrow />
        </NextBtn>
      </Container>
    );
  }
}
