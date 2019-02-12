import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Link, LinkContainer, Menu } from "./styles";
import { Link as OutsideLink } from "../Atoms/Atoms";
import styles from "./styles";
import { AdditionalMenu } from "../AdditionalMenu/AdditionalMenu";

export class DesktopMenu extends Component {
  static propTypes = {
    location: PropTypes.object,
    additionalMenuIsOpenId: PropTypes.string,
    onCloseAdditionalMenu: PropTypes.func,
    onOpenAdditionalMenu: PropTypes.func,
    onNavLinkClick: PropTypes.func,
    onSectionChange: PropTypes.func,
    routes: PropTypes.array,
    selectedId: PropTypes.string,
    transitionEnd: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object),
  };

  shouldComponentUpdate(
    {
      selectedId: nextSelectedId,
      additionalMenuIsOpenId: nextAdditionalMenuIsOpenId,
      transitionEnd: nextTransitionEnd,
    },
    nextState,
  ) {
    const { selectedId, additionalMenuIsOpenId, transitionEnd } = this.props;

    return (
      selectedId !== nextSelectedId ||
      additionalMenuIsOpenId !== nextAdditionalMenuIsOpenId ||
      transitionEnd !== nextTransitionEnd
    );
  }

  render() {
    const {
      routes,
      onCloseAdditionalMenu,
      onOpenAdditionalMenu,
      currentRoute,
      additionalMenuIsOpenId,
      location,
      selectedId,
      onNavLinkClick,
      onSectionChange,
      transitionEnd,
      data,
    } = this.props;

    return (
      <Menu>
        {routes.map(({ text, id, route, outsideLink, additionalMenu, additionalMenuWidth }) => {
          const item = data.find(item => item.id === id);
          const title = item ? item.title : text;

          if (outsideLink)
            return (
              <LinkContainer key={outsideLink}>
                <OutsideLink href={outsideLink} target="_blank" onMouseOver={onCloseAdditionalMenu}>
                  {title}
                </OutsideLink>
              </LinkContainer>
            );

          const listIdentifiersWithoutSpecialStyles = ["portfolio"];

          const className =
            additionalMenu && !listIdentifiersWithoutSpecialStyles.includes(id)
              ? {
                  [id]: true,
                }
              : {};

          return (
            <LinkContainer key={id} {...className} style={{ width: additionalMenuWidth }}>
              <Link
                style={{ willChange: transitionEnd && "color" }}
                onMouseOver={
                  additionalMenu ? () => onOpenAdditionalMenu(id) : onCloseAdditionalMenu
                }
                to={route}
                className={cn({
                  [styles.activeLink]: location.pathname.includes(route) && route !== "/",
                  [styles.withoutAdditionalMenuAndIsActive]:
                    !additionalMenu && currentRoute && currentRoute.id === id,
                })}
                activeClassName={styles.activeLink}
                onClick={event =>
                  onNavLinkClick({
                    transitionEnd: false,
                    id,
                    event,
                  })
                }
              >
                <span>{title}</span>
              </Link>
              {additionalMenuIsOpenId === id && (
                <AdditionalMenu
                  onSectionChange={({ id: sectionId }) => {
                    onCloseAdditionalMenu();
                    onSectionChange({ pageId: id, id: sectionId, isClickEvent: true });
                  }}
                  selectedId={selectedId}
                  fadeIn
                  additionalMenuIsOpenId={additionalMenuIsOpenId}
                  additionalMenu={additionalMenu}
                />
              )}
            </LinkContainer>
          );
        })}
      </Menu>
    );
  }
}
