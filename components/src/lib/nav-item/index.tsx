import globalStyles from "../index.module.css";
import styles from "./nav-item.module.css";
import { INavItemProps } from "./nav-item.types";

export const NavItem: React.FC<INavItemProps> = (props) => {
  const { children, className, noMargin, noPadding, to, ...rest } = props;

  return (
    <li
      {...rest}
      className={[
        styles["nav-item"],
        noMargin && globalStyles["fa-class-no-margin"],
        noPadding && globalStyles["fa-class-no-padding"],
        className,
      ]
        .filter((el) => el)
        .join(" ")}
    >
      <a href={to || "#"}>{children}</a>
    </li>
  );
};
