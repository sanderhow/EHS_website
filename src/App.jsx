import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import * as A from "./partsApp";
import StronaGlowna from "./Pages/StronaGlowna/StronaGlowna";
import Uslugi from "./Pages/Uslugi/Uslugi";
import Szkolenia from "./Pages/Szkolenia/Szkolenia";
import Nadzor from "./Pages/Nadzor/Nadzor";
import Firma from "./Pages/Firma/Firma";
import Kontakt from "./Pages/Kontakt/Kontakt";
import Navbar from "./Components/Navbar";
import Cennik from "./Pages/Cennik/Cennik";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredMenuListed, setIsHoveredMenuListed] = useState(false);
  const [rect, setRect] = useState({});

  const handleMouseHover = (event) => {
    const hoveredElement = event.target;
    setRect(hoveredElement.getBoundingClientRect());
    setIsHovered(true);
  };

  const handleMouseLeave = (event) => {
    turnOffWithDelay();
  };

  const handleMouseHoveredListedMenu = (event) => {
    setIsHoveredMenuListed(true);
  };

  const handleMouseLeaveListedMenu = (event) => {
    setIsHovered(false);
    setIsHoveredMenuListed(false);
  };

  const turnOffWithDelay = () => {
    if (!isHoveredMenuListed) {
      setIsHovered(false);
    }
  };

  return (
    <>
      <A.AppState>
        <BrowserRouter>
          <Navbar
            Hover={isHovered}
            HoverOn={handleMouseHover}
            LeaveHover={handleMouseLeave}
            Hover2={handleMouseHoveredListedMenu}
            LeaveHover2={handleMouseLeaveListedMenu}
            Rect={rect}
          />
          <Routes>
            <Route path="/" element={<StronaGlowna />} />
            <Route path="/uslugi" element={<Uslugi />} />
            <Route path="/szkolenia" element={<Szkolenia />} />
            <Route path="/nadzor" element={<Nadzor />} />
            <Route path="/cennik" element={<Cennik />} />
            <Route path="/firma" element={<Firma />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </BrowserRouter>
      </A.AppState>
      <A.Footer>© COPYRIGHT {new Date().getFullYear()}</A.Footer>
    </>
  );
}

export default App;
