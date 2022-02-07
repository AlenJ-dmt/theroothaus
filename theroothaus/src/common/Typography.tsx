import { FC, ReactNode } from "react";
import styles from "./Typography.module.scss";

interface ITypographyProps {
  children: ReactNode;
  type: "h1" | "h2" | "h3" | "h4" | "display";
  color?: string;
  align?: "left" | "center" | "right";
}

export const Typography: FC<ITypographyProps> = ({
  children,
  type,
  color,
  align,
}) => {
  return (
    <span
      style={{
        color: `${color} !important`,
        textAlign: `${align ? align : "left"}`,
      }}
      className={`${styles.typography} ${styles[`typography-${type}`]}`}
    >
      {children}
    </span>
  );
};
