import "./Menu.scss";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import { IoLogoTiktok } from "react-icons/io5";
import { colors } from "../../constants/colors";
import * as React from "react";
import { Link } from "react-router-dom"
import { BsChevronDoubleDown } from "react-icons/bs"
import { SubMenu } from "../SubMenu/SubMenu"
import { useState } from "react"

interface IMenuProps {
  isMenuOpen: boolean;
  showCategories: boolean;
  setShowCategories: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu: React.FC<IMenuProps> = ({isMenuOpen, showCategories, setShowCategories }) => {
  const menu = document.getElementsByClassName("nav-menu")[0];

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

  const links = ["Succulents", "Peperomia", "Philodendron",
    "Hoya", "Alocasia", "Calathea", "Anthurium", "Syngonium"
  ]

  return (
    <div className="nav-menu">
      <ul>
        <div className="menu-link">
          <Link to="/catalog">Home</Link>
        </div>
        <div className="menu-link">
          <Link to="/catalog">Shop All</Link>
        </div>
        <SubMenu setOpen={setShowCategories} labels={links} mainLabel="Shop by variety" open={showCategories} />
        <div className="menu-link">
          <Link to="/catalog">Plants with free shipping</Link>
        </div>
        <div className="menu-link">
          <Link to="/catalog">Propagation supplies</Link>
        </div>
        <div className="menu-link">
          <Link to="/catalog">Contact us</Link>
        </div>
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
