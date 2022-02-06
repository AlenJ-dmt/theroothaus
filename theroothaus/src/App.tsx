import "./App.scss";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import HeaderMessage from "./components/HeaderMessage/HeaderMessage";
import { Route, Routes } from "react-router-dom"
import { LandingPage } from "./Pages/LandingPage/LandingPage"
import { DetailsPage } from "./Pages/DetailsPage/DetailsPage"
import { Cart } from "./components/Cart/Cart"
import { Overlay } from "./components/Overlay/Overlay"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false)

  return (
    <div className="App">
      <Overlay />
      <Header isMenuOpen={isMenuOpen} setShowCategories={setShowCategories} setIsMenuOpen={setIsMenuOpen} />
      <Menu showCategories={showCategories} setShowCategories={setShowCategories} isMenuOpen={isMenuOpen} />
      <Cart />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>

    </div>
  );
}

export default App;
