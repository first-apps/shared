import React from "react";
import styles from "./button.module.css";
import { IButtonProps } from "./button.types";

export const Button: React.FC<IButtonProps> = (props) => {
  const { icon, position = "left", children, ...rest } = props;
  return (
    <button
      {...rest}
      className={[
        styles.button,
        icon && (position === "left" ? styles.left : styles.right),
        rest.className,
      ]
        .filter((el) => el)
        .join(" ")}
    >
      {position === "left" && icon}
      {children}
      {position === "right" && icon}
    </button>
  );
};
