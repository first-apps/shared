import styles from "./container.module.css";
import globalStyles from "../index.module.css";
import { IContainerProps } from "./container.types";

export const Container: React.FC<IContainerProps> = (props) => {
  const {
    className,
    children,
    flex,
    flexColumn,
    flexRow,
    alignCenter,
    ...rest
  } = props;
  return (
    <div
      {...rest}
      className={[
        styles.container,
        flex && globalStyles.flex,
        flexRow && globalStyles["flex-row"],
        flexColumn && globalStyles["flex-column"],
        alignCenter && globalStyles[`align-center`],
        className,
      ]
        .filter((el) => el)
        .join(" ")}
    >
      {children}
    </div>
  );
};
