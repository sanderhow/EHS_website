import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import * as P from "./partsApp";
import StronaGlowna from "./Pages/StronaGlowna/StronaGlowna";
import Uslugi from "./Pages/Uslugi/Uslugi";
import Szkolenia from "./Pages/Szkolenia/Szkolenia";
import Nadzor from "./Pages/Nadzor/Nadzor";
import Firma from "./Pages/Firma/Firma";
import Kontakt from "./Pages/Kontakt/Kontakt";
import Navbar from "./Components/Navbar";
import Cennik from "./Pages/Cennik/Cennik";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const [isNavBarHovered, setIsNavBarHovered] = useState(false);
  const [menuLinkRect, setMenuLinkRect] = useState({});
  const [serviceTitle, setServiceTitle] = useState("null");

  const handleMouseHover = (event) => {
    const hoveredElement = event.target;
    setServiceTitle(event.target.innerHTML);
    setMenuLinkRect(hoveredElement.getBoundingClientRect());
    setIsNavBarHovered(true);
  };

  const handleMouseLeaveListedMenu = (event) => {
    setIsNavBarHovered(false);
  };

  const turnOffListedMenu = () => {
    setIsNavBarHovered(false);
  };

  return (
    <>
      <P.AppState>
        <BrowserRouter>
          <ScrollToTop />
          <P.ShortContact onMouseEnter={turnOffListedMenu}>
            <P.Text>Zadzwoń do nas + 48 508 762 858</P.Text>
            <P.Text>Napisz do nas: kontakt@smsafetygroup.pl</P.Text>
          </P.ShortContact>
          <Navbar
            isNavBarHovered={isNavBarHovered}
            hoverOnMenuLink={handleMouseHover}
            leaveHoverListedMenu={handleMouseLeaveListedMenu}
            menuLinkRect={menuLinkRect}
            turnOffListedMenu={turnOffListedMenu}
            serviceTitle={serviceTitle}
          />
          <Routes>
            <Route exact path="/" element={<StronaGlowna />} />
            <Route path="/uslugi" element={<Uslugi />} />
            <Route path="/szkolenia" element={<Szkolenia />} />
            <Route path="/nadzor" element={<Nadzor />} />
            <Route path="/cennik" element={<Cennik />} />
            <Route path="/firma" element={<Firma />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </BrowserRouter>
      </P.AppState>
      <P.Footer>© COPYRIGHT {new Date().getFullYear()}</P.Footer>
    </>
  );
}

export default App;
