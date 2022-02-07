import styles from "./index.module.scss";
import { colors } from "../../constants/colors";
import * as React from "react";
import { CloseIcon } from "../../common/icons/CloseIcon";
import { SearchIcon } from "../../common/icons/SearchIcon";
import { CartIcon } from "../../common/icons/CartIcon";
import { Hamburguer } from "./Hamburguer";

interface IHeaderProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
  setShowCategories: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<IHeaderProps> = ({
  setIsMenuOpen,
  isMenuOpen,
  setShowCategories,
}) => {
  const closeMenu = () => {
    setShowCategories(false);
    setIsMenuOpen(!isMenuOpen);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <header className={styles["header-container"]}>
      {isMenuOpen ? (
        <CloseIcon
          onClick={closeMenu}
          size="2.5rem"
          color={colors["base-light-beige"]}
        />
      ) : (
        <Hamburguer onClick={openMenu} />
      )}

      <div className={styles["icons-container"]}>
        <SearchIcon
          size="2rem"
          color={
            isMenuOpen ? colors["base-light-beige"] : colors["base-dark-green"]
          }
        />
        <CartIcon
          size="2rem"
          color={
            isMenuOpen ? colors["base-light-beige"] : colors["base-dark-green"]
          }
        />
      </div>
    </header>
  );
};

export default Header;
