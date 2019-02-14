import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles, {
  CompanyPhotoBlockTransitionGroup,
  CompanyPhotoBlock,
  CompanyPhotoContainer,
} from "./styles";

class PhotoComponent extends Component {
  shouldComponentUpdate({ item: nextItem }, nextState) {
    const { id, item } = this.props;

    return (nextItem && nextItem.next.id === id) || (item && item.next.id === id);
  }

  render() {
    const { item, avatar, id } = this.props;

    return (
      <CompanyPhotoBlockTransitionGroup>
        {item && item.next.id === id && (
          <CompanyPhotoBlock
            className={styles.fadeOut}
            style={{ backgroundImage: `url(${item.prev.avatar})` }}
          />
        )}
        <CompanyPhotoBlock
          className={cn({ [styles.fadeIn]: item && id === item.next.id })}
          style={{ backgroundImage: `url(${avatar})` }}
        />
      </CompanyPhotoBlockTransitionGroup>
    );
  }
}

export class CompanyPhotoTransition extends Component {
  static propTypes = {
    id: PropTypes.string,
    url: PropTypes.string,
  };

  state = {
    removedIndex: null,
  };

  render() {
    const { visibleItems, item } = this.props;

    return (
      <CompanyPhotoContainer>
        {visibleItems.map(employee => (
          <PhotoComponent key={employee.id} item={item} {...employee} />
        ))}
      </CompanyPhotoContainer>
    );
  }
}
