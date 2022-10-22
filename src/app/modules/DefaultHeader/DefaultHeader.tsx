import React from "react";
import clsx from "clsx";
import styles from "./DefaultHeader.module.scss";
import { ReactComponent as BurgerIcon } from "./burgerIcon.svg";
import { ReactComponent as UserIcon } from "./user.svg";
interface Props {
  className?: string;
  onUserMenuClick: () => void;
  onBurgerMenuClick: () => void;
}

export const DefaultHeader: React.FC<Props> = (props: Props) => {
  const { onUserMenuClick, onBurgerMenuClick, className } = props;
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.menu}>
        <BurgerIcon className={styles.burgerIcon} onClick={onBurgerMenuClick} />
      </div>
      <div className={styles.userMenu}>
        <UserIcon className={styles.userIcon} onClick={onUserMenuClick} />
      </div>
    </div>
  );
};
