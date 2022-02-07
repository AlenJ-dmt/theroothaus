import { FC } from "react";
import styles from "./Hamburguer.module.scss";

interface IHamburguerProps {
  onClick: () => void;
}

export const Hamburguer: FC<IHamburguerProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.wrapper}>
      <div className={styles.ham} />
    </div>
  );
};
