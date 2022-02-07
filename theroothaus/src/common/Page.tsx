import { FC, ReactNode } from "react";
import styles from "./Page.module.scss";

interface IPageProps {
  children: ReactNode;
  className?: string;
}

export const Page: FC<IPageProps> = ({ children, className }) => {
  return (
    <div className={`${styles.page} ${styles[`${className}`]}`}>{children}</div>
  );
};
