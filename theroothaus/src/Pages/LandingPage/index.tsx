import styles from "./index.module.scss";
import { Hero } from "./Hero";
import { Page } from "../../common/Page";
import { NewArrivals } from "./NewArrivals";
import jade from "../../../src/images/jade.jpg"
import micans from "../../../src/images/mic.jpg"
import global from "../../../src/images/globalGreen.jpg"
import { FollowUsOnInstagram } from "./FollowUsOnInstagram";

export const LandingPage = () => {

  const newArrivals = [
    {
      name: " micans",
      imageLink: micans,
      title: "Philodendron Micans *free shipping* — semi bare root"
    },
    {
      name: "jade",
      imageLink: jade,
      title: "Scindapsus Jade Satin | Pothos | *rare* — free shipping — Shipped semi-bare root"
    },
    {
      name: " gloabl",
      imageLink: global,
      title: "Global Green Pothos *RARE* Free Shipping - Semi Bare Root"
    }
  ]

  const instagramLinks = [
    global, jade, micans, global, jade, micans
  ]

  return (
    <Page>
      <Hero />
      <NewArrivals newArrivals={newArrivals} />
      <video src="https://v16m-webapp.tiktokcdn-us.com/38941e57b50c2b30726ab364d3b3a69e/62012d55/video/tos/maliva/tos-maliva-ve-0068c799-us/273a46f16f3344d4b7f3d65ad8039ba7/?a=1988&br=3290&bt=1645&cd=0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&ft=Y.sFOFGgkag3-I&l=20220207083133010113135228090BBF0D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajUzamg6ZjRkOjMzZzczNEApNGQ4Mzs4Mzw3NzVmPDU4OWdoNGFzcjRncG1gLS1kMS9zczExYDA0YzI1LzY2YDBhYC86Yw%3D%3D&vl=&vr=" controls />
      <FollowUsOnInstagram links={instagramLinks} />
      {/* <div className={styles["tag-container"]}>
        <a className={styles.tag} href="https://www.instagram.com/theroothaus/">@THEROOTHAUS</a>
      </div> */}
    </Page>
  );
};
