"use client";

import { useState } from "react";
import globalStyles from "../index.module.css";
import styles from "./navbar.module.css";
import { INavbarProps } from "./navbar.types";
import { Button } from "../button";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";

export const Navbar: React.FC<INavbarProps> = (props) => {
  const { children, row, column, alignCenter, className, ...rest } = props;
  const [open, setOpen] = useState(false);

  const Trigger = (
    <Button
      className={[styles["navigation-trigger"]].filter((el) => el).join(" ")}
      onClick={() => setOpen((prev) => !prev)}
      icon={
        open ? (
          <XMarkIcon className={globalStyles["fa-class-default-icon-size"]} />
        ) : (
          <Bars3Icon className={globalStyles["fa-class-default-icon-size"]} />
        )
      }
    />
  );

  return (
    <>
      {Trigger}
      <nav
        role="navigation"
        {...rest}
        className={[
          styles.navbar,
          row && globalStyles["fa-class-flex-row"],
          column && globalStyles["fa-class-flex-column"],
          alignCenter && globalStyles["fa-class-align-center"],
          open && styles.open,
          className,
        ]
          .filter((el) => el)
          .join(" ")}
      >
        {Trigger}
        {children}
      </nav>
    </>
  );
};
