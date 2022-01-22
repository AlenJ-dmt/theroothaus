import "./App.scss";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import HeaderMessage from "./components/HeaderMessage/HeaderMessage";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="App">
      <HeaderMessage message="We offer local pickup for the Houston area. Select 'local pickup' during checkout" />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} />
    </div>
  );
}

export default App;
