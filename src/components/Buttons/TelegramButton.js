import React from "react";
import { css } from "astroturf";
import cn from "classnames";

import { IconBtn } from "./IconButtons";
import { ReactComponent as Telegram } from "../../assets/img/icons/telegram.svg";

const styles = css`
  .telegramBtn {
    position: relative;
    width: 3.4285rem;
    height: 3.4285rem;
    border-radius: 0.1428rem;
    box-shadow: 0 0.5714rem 0.5714rem 0 rgba(10, 18, 33, 0.1);
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1.7rem;
      height: 1.5285rem;
    }
    @media (max-width: 991px) {
      width: 2.5714rem;
      height: 2.5714rem;
      svg {
        width: 1.25rem;
        height: 1.1rem;
      }
    }
  }
`;

export const TelegramButton = ({ className, ...props }) => {
  return (
    <IconBtn className={cn(styles.telegramBtn, className)} {...props}>
      <Telegram />
    </IconBtn>
  );
};
