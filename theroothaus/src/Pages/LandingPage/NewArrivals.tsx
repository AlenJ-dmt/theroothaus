import styles from "./NewArrivals.module.scss";
import { Typography } from "../../common/Typography";
import { Section } from "../../common/Section";
import { Container } from "../../common/Container";
import { colors } from "../../constants/colors";
import { ImageSlider } from "../../components/ImageSlider/ImageSlider";
import { FC } from "react"

export type newArrival = {
  name: string
  title: string
  imageLink: string
}

interface INewArrivalsProps {
  newArrivals: newArrival[]
}

export const NewArrivals: FC<INewArrivalsProps> = ({ newArrivals }) => {

  return (
    <Section className={`${styles["new-arrivals"]}`}>
      <Typography align="center" color={colors["base-black"]} type="h2">New Arrivals</Typography>
      <ImageSlider newArrivals={newArrivals} />
    </Section>
  );
};
