import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import groupBy from "lodash/groupBy";
import cn from "classnames";

import { H2 } from "../../components/Atoms/Atoms";
import animation from "../../components/Transition/animation";
import { LinkComponent } from "./LinkComponent";
import { Menu, ListItem, ListHeader, MenuList } from "./styles";

export class AdditionalMenu extends PureComponent {
  static propTypes = {
    additionalMenuIsOpenId: PropTypes.string,
    additionalMenu: PropTypes.array,
    fadeIn: PropTypes.bool,
    selectedId: PropTypes.string,
    onSectionChange: PropTypes.func,
    className: PropTypes.string,
    leftSide: PropTypes.bool,
    portfolio: PropTypes.bool,
    isPortfolioPage: PropTypes.bool,
  };

  render() {
    const {
      additionalMenu,
      className,
      leftSide,
      fadeIn,
      selectedId,
      onSectionChange,
      isPortfolioPage,
    } = this.props;
    const grouped = groupBy(additionalMenu, "groupName");

    return (
      <Menu leftSide={leftSide} className={cn(className, { [animation.fadeIn]: fadeIn })}>
        {Object.keys(grouped).map(groupName => (
          <MenuList key={groupName}>
            {leftSide ? <H2>{groupName}</H2> : <ListHeader>{groupName}</ListHeader>}
            {grouped[groupName].map(item => (
              <ListItem key={item.id}>
                <LinkComponent
                  leftSide={leftSide}
                  isPortfolioPage={isPortfolioPage}
                  onSectionChange={onSectionChange}
                  selectedId={selectedId}
                  {...item}
                />
              </ListItem>
            ))}
          </MenuList>
        ))}
      </Menu>
    );
  }
}
