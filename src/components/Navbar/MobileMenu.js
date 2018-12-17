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
  };

  render() {
    const { routes, onNavLinkClick, location } = this.props;

    return (
      <MobileMenuList className={animation.fadeIn}>
        {routes.map(({ text, id, route, outsideLink }) => {
          if (outsideLink)
            return (
              <LinkContainer key={outsideLink}>
                <OutsideLink href={outsideLink} target="_blank">
                  {text}
                </OutsideLink>
              </LinkContainer>
            );

          return (
            <LinkContainer key={id}>
              <Link
                to={route}
                className={cn({
                  [styles.activeLink]: location.pathname.includes(route) && route !== "/",
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
                {text}
              </Link>
            </LinkContainer>
          );
        })}
      </MobileMenuList>
    );
  }
}
