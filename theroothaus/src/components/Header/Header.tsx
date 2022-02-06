import "./Header.scss";
import logo from "../../images/logo-header.jpeg";
import { colors } from "../../constants/colors";
import * as React from "react";
import { GrClose } from "react-icons/gr";

interface IHeaderProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
  setShowCategories: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<IHeaderProps> = ({ setIsMenuOpen, isMenuOpen, setShowCategories }) => {

  return (
    <header className="header-container">
      <div className="ham-container">
        {isMenuOpen ? (
          <div onClick={() => {
            setShowCategories(false)
            setIsMenuOpen(!isMenuOpen)
          }} className="close">
            <svg viewBox="0 0 24 24" height="25" width="25">
              <path
                stroke={colors["base-dark-green"]}
                strokeWidth="1"
                d="M3,3 L21,21 M3,21 L21,3"
              ></path>
            </svg>
          </div>
        ) : (
          <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="wrapper">
            <div className="ham"></div>
          </div>
        )}
      </div>
      <div className="icons-container">
        <svg viewBox="0 0 24 24" height="2rem" width="2rem">
          <path
            fill="none"
            stroke={colors["base-dark-green"]}
            strokeWidth="2"
            d="M15,15 L22,22 L15,15 Z M9.5,17 C13.6421356,17 17,13.6421356 17,9.5 C17,5.35786438 13.6421356,2 9.5,2 C5.35786438,2 2,5.35786438 2,9.5 C2,13.6421356 5.35786438,17 9.5,17 Z"
          ></path>
        </svg>
        <svg viewBox="0 0 24 24" height="2rem" width="2rem">
          <path
            fill="none"
            stroke={colors["base-dark-green"]}
            strokeWidth="2"
            d="M4,7 L20,7 L20,23 L4,23 L4,7 Z M8,9 L8,5 C8,2.790861 9.79535615,1 12,1 L12,1 C14.209139,1 16,2.79535615 16,5 L16,9"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
