import "./Menu.scss";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import { IoLogoTiktok } from "react-icons/io5";
import { colors } from "../../constants/colors";
import * as React from "react";

interface IMenuProps {
  isMenuOpen: boolean;
}

const Menu: React.FC<IMenuProps> = (props) => {
  const { isMenuOpen } = props;
  const menu = document.getElementsByClassName("nav-menu")[0];

  React.useEffect(() => {
    console.log("ping");
    if (!!menu) {
      if (isMenuOpen) {
        menu.classList.add("slide-right");
        menu.classList.remove("slide-left");
      } else {
        menu.classList.add("slide-left");
        menu.classList.remove("slide-right");
      }
    }
  }, [isMenuOpen]);

  return (
    <div className="nav-menu">
      <ul>
        <li>Home</li>
        <li>Catalog</li>
        <li>Propagation Supplies</li>
        <li>Low light plants</li>
        <li>Medium / bright indirect light plants</li>
        <li>Full sun / direct light plants</li>
        <li>Plants With Free Shipping</li>
      </ul>
      <div className="social-media-links-container">
        <div className="container">
          <AiFillFacebook size={25} color={colors["base-white"]} />
          <AiOutlineInstagram size={25} color={colors["base-white"]} />
          <GrPinterest size={20} color={colors["base-white"]} />
          <IoLogoTiktok size={20} color={colors["base-white"]} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
