import { FC, ReactNode } from "react";
import styles from "./Section.module.scss";

interface ISectionProps {
  className?: string;
  children: ReactNode;
}

export const Section: FC<ISectionProps> = ({ className, children }) => {

  return (

    <section className={`${styles.section} ${className}`}>
      {children}
    </section>
  );
};
