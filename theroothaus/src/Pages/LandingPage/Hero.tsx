import bg from "../../../src/images/bg.jpg";
import styles from "./Hero.module.scss";
import { colors } from "../../constants/colors";
import { Section } from "../../common/Section";
import { Typography } from "../../common/Typography";
import { TrademarkIcon } from "../../common/icons/TrademarkIcon";

export const Hero = () => {
  return (
    <Section>
      <img className={styles.hero} src={bg} />
      <div className={styles.message}>
        <div className={styles["text-holder"]}>
          <TrademarkIcon size="1rem" color={colors["base-white"]} />
          <Typography align="center" type="h1">
            You don't have too many plants
          </Typography>
        </div>
        <div>
          <button>Shop all</button>
          <button>Shop by category</button>
        </div>
      </div>
    </Section>
  );
};
