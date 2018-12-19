import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import groupBy from "lodash/groupBy";
import cn from "classnames";

import { H2, Link } from "../../components/Atoms/Atoms";
import animation from "../../components/Transition/animation";
import { Menu, ListItem, ListHeader, MenuList, SecondLevelMenu } from "./styles";

export const LinkComponent = ({ text, little = false, count, id, selectedId, onSectionChange }) => {
  return (
    <Link onClick={() => onSectionChange({ id })} little={little} isActive={selectedId === id}>
      {text}
      {count && <span>{count}</span>}
    </Link>
  );
};

export class AdditionalMenu extends PureComponent {
  static propTypes = {
    additionalMenuIsOpenId: PropTypes.string,
    additionalMenu: PropTypes.array,
    fadeIn: PropTypes.bool,
    selectedId: PropTypes.string,
    onSectionChange: PropTypes.func,
  };

  render() {
    const { additionalMenu, leftSide, fadeIn, selectedId, onSectionChange } = this.props;

    return (
      <Menu leftSide={leftSide} className={cn({ [animation.fadeIn]: fadeIn })}>
        {additionalMenu &&
          additionalMenu.map(({ title, id, children }) => {
            const grouped = groupBy(children, "groupName");

            return (
              <MenuList key={id}>
                {leftSide ? <H2>{title}</H2> : <ListHeader>{title}</ListHeader>}
                {Object.keys(grouped).map(key => {
                  if (key !== "undefined") {
                    return (
                      <ListItem key={key}>
                        <Link
                          as="h4"
                          title
                          isActive={grouped[key].some(({ id }) => id === selectedId)}
                        >
                          {key}
                        </Link>
                        <SecondLevelMenu>
                          {grouped[key].map((item, index) => (
                            <LinkComponent
                              onSectionChange={onSectionChange}
                              key={index}
                              little
                              selectedId={selectedId}
                              {...item}
                            />
                          ))}
                        </SecondLevelMenu>
                      </ListItem>
                    );
                  } else {
                    return grouped[key].map((item, index) => (
                      <ListItem key={index}>
                        <LinkComponent
                          onSectionChange={onSectionChange}
                          selectedId={selectedId}
                          {...item}
                        />
                      </ListItem>
                    ));
                  }
                })}
              </MenuList>
            );
          })}
      </Menu>
    );
  }
}
