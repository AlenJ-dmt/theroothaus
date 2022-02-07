import styles from "./LandingPage.module.scss";
import { Hero } from "./Hero";
import { Page } from "../../common/Page";
import { NewArrivals } from "./NewArrivals";
export const LandingPage = () => {
  return (
    <Page>
      <Hero />
      <NewArrivals />
    </Page>
  );
};
