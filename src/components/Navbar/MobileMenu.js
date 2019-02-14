import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import animation from "../../components/Transition/animation";
import { Link, LinkContainer, MobileMenu as MobileMenuList } from "./styles";
import { Link as OutsideLink } from "../Atoms/Atoms";
import styles from "./styles";

export class MobileMenu extends PureComponent {
  static propTypes = {
    location: PropTypes.object,
    onNavLinkClick: PropTypes.func,
    routes: PropTypes.array,
    data: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const { routes, onNavLinkClick, location, data } = this.props;

    return (
      <MobileMenuList className={animation.fadeIn}>
        {routes.map(({ text, id, route, outsideLink }) => {
          const item = data.find(item => item.id === id);
          const title = item ? item.title : text;

          if (outsideLink)
            return (
              <LinkContainer key={outsideLink}>
                <OutsideLink href={outsideLink} target="_blank">
                  {title}
                </OutsideLink>
              </LinkContainer>
            );

          return (
            <LinkContainer key={id}>
              <Link
                to={route}
                className={cn({
                  [styles.mobileActiveLink]: location.pathname.includes(route) && route !== "/",
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
                {title}
              </Link>
            </LinkContainer>
          );
        })}
      </MobileMenuList>
    );
  }
}
