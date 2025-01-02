import styles from "./page-container.module.css";
import { IPageContainerProps } from "./page-container.types";

export const PageContainer: React.FC<IPageContainerProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <div
      {...rest}
      className={[styles["page-container"], rest.className]
        .filter((el) => el)
        .join(" ")}
    >
      {children}
    </div>
  );
};
