import { FC, ReactNode } from "react";
import styles from "./Container.module.scss";

interface IContainerProps {
  orientation: "horizontal" | "vertical";
  children: ReactNode;
}

export const Container: FC<IContainerProps> = ({ orientation, children }) => {
  return (
    <div
      style={{ flexDirection: orientation === "horizontal" ? "row" : "column" }}
      className={`${styles.container}`}
    >
      {children}
    </div>
  );
};
