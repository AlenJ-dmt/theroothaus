import "./App.scss";
import { useState, useEffect } from "react";
import Menu from "./components/Menu/index";
import Header from "./components/Header/index";
import HeaderMessage from "./components/HeaderMessage/HeaderMessage";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { DetailsPage } from "./Pages/DetailsPage/DetailsPage";
import { Cart } from "./components/Cart/Cart";
import { Overlay } from "./components/Overlay/Overlay";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const menu = document.getElementById("nav-menu");
  useEffect(() => {
    if (!!menu) {
      if (isMenuOpen) {
        menu.classList.add("slide-right");
        menu.classList.remove("slide-left");
      } else {
        menu.classList.add("slide-left");
        menu.classList.remove("slide-right");
      }
    }
  }, []);

  return (
    <div className="App">
      {/* <Overlay /> */}
      <Header
        isMenuOpen={isMenuOpen}
        setShowCategories={setShowCategories}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Menu
        setIsMenuOpen={setIsMenuOpen}
        showCategories={showCategories}
        setShowCategories={setShowCategories}
        isMenuOpen={isMenuOpen}
      />
      {/* <Cart /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
