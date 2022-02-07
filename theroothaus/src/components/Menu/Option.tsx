import { FC, ReactNode } from "react";
import styles from "./Option.module.scss";
import { Typography } from "../../common/Typography";
import { Link, useLocation } from "react-router-dom";

interface IOptionProps {
  name: string;
  to: string;
  onClick: () => void;
}
export const Option: FC<IOptionProps> = ({ name, to, onClick }) => {
  return (
    <Link className={styles.link} to={to}>
      <div onClick={onClick} className={styles["link-option"]}>
        <Typography type="h3">{name}</Typography>
      </div>
    </Link>
  );
};
