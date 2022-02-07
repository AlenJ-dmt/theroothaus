import styles from "./index.module.scss";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import { IoLogoTiktok } from "react-icons/io5";
import { colors } from "../../constants/colors";
import * as React from "react";
import { SubMenu } from "../SubMenu/SubMenu";
import { Option } from "./Option";

interface IMenuProps {
  isMenuOpen: boolean;
  showCategories: boolean;
  setShowCategories: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<IMenuProps> = ({
  isMenuOpen,
  showCategories,
  setShowCategories,
  setIsMenuOpen,
}) => {
  const menu = document.getElementById("nav-menu");

  React.useEffect(() => {
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

  const links = [
    "Succulents",
    "Peperomia",
    "Philodendron",
    "Hoya",
    "Alocasia",
    "Calathea",
    "Anthurium",
    "Syngonium",
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div id="nav-menu" className={styles["nav-menu"]}>
      <ul>
        <Option onClick={closeMenu} name="Home" to="/" />
        <Option
          onClick={closeMenu}
          name="Plants with free shipping"
          to="catalog"
        />
        <Option onClick={closeMenu} name="Propagation supplies" to="catalog" />
        <Option onClick={closeMenu} name="Shop All" to="catalog" />
        <Option onClick={closeMenu} name="Contact us" to="catalog" />
        <SubMenu
          setOpen={setShowCategories}
          labels={links}
          mainLabel="Shop by variety"
          open={showCategories}
        />
      </ul>
      <div className="social-media-links-container">
        <div className="container">
          <AiFillFacebook size={25} color={colors["base-dark-green"]} />
          <AiOutlineInstagram size={25} color={colors["base-dark-green"]} />
          <GrPinterest size={20} color={colors["base-dark-green"]} />
          <IoLogoTiktok size={20} color={colors["base-dark-green"]} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
