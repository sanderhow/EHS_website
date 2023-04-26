import React, { useState } from "react";
import * as P from "./partsNavbar";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setIsClicked(!isClicked);
  };

  const handleLogoClicked = (event) => {
    navigate("/");
  };

  return (
    <>
      <P.PrimaryNav>
        <P.Logo
          onClick={handleLogoClicked}
          src="assets/logo_transparent.png"
          alt="logo"
        />
        <P.Hamburger size={50} onClick={handleClick} />
        {isClicked && (
          <P.ListedHamburgerMenu>
            <P.MenuLink
              to="/uslugi"
              activeStyle
              onMouseOver={props.HoverOn}
              onMouseLeave={props.LeaveHover}
            >
              Usługi
            </P.MenuLink>
            <P.MenuLink
              to="/szkolenia"
              activeStyle
              onMouseOver={props.HoverOn}
              onMouseLeave={props.LeaveHover}
            >
              Szkolenia
            </P.MenuLink>
            <P.MenuLink
              to="/nadzor"
              activeStyle
              onMouseOver={props.HoverOn}
              onMouseLeave={props.LeaveHover}
            >
              Stały nadzór BHP
            </P.MenuLink>
            <P.MenuLink
              to="/cennik"
              activeStyle
              onMouseOver={props.HoverOn}
              onMouseLeave={props.LeaveHover}
            >
              Cennik
            </P.MenuLink>
            <P.MenuLink
              to="/firma"
              activeStyle
              onMouseOver={props.HoverOn}
              onMouseLeave={props.LeaveHover}
            >
              O nas
            </P.MenuLink>
            <P.MenuLink
              to="/kontakt"
              activeStyle
              onMouseOver={props.HoverOn}
              onMouseLeave={props.LeaveHover}
            >
              Kontakt
            </P.MenuLink>
          </P.ListedHamburgerMenu>
        )}

        <P.Menu>
          {props.Hover && props.serviceTitle === "Usługi" && (
            <>
              <P.DropdownMenu
                onMouseOver={props.Hover2}
                onMouseLeave={props.LeaveHover2}
                x={props.Rect.x}
                y={props.Rect.y}
                >
                  <P.DropdownMenuLink
                  to="/szkolenia"
                  activeStyle
                  >
                  Szkolenia wstępne
                  </P.DropdownMenuLink>
                  <P.DropdownMenuLink
                  to="/szkolenia"
                  activeStyle
                  >
                  Szkolenia okresowe
                  </P.DropdownMenuLink>
                  <P.DropdownMenuLink
                  to="/nadzor"
                  activeStyle
                  >
                  Outsourcing BHP
                  </P.DropdownMenuLink>
                  <P.DropdownMenuLink
                  to="/cennik"
                  activeStyle
                  >
                  Obsługa BHP
                  </P.DropdownMenuLink>
              </P.DropdownMenu>
              <P.OpacityElement onMouseEnter={props.turnOffListedMenu}/>
            </>
          )}
          <P.MenuLink
            to="/uslugi"
            activeStyle
            onMouseOver={props.HoverOn}
            onMouseLeave={props.LeaveHover}
          >
            Usługi
          </P.MenuLink>
          <P.MenuLink
            to="/szkolenia"
            activeStyle
            onMouseOver={props.HoverOn}
            onMouseLeave={props.LeaveHover}
          >
            Szkolenia
          </P.MenuLink>
          <P.MenuLink
            to="/nadzor"
            activeStyle
            onMouseOver={props.HoverOn}
            onMouseLeave={props.LeaveHover}
          >
            Stały nadzór BHP
          </P.MenuLink>
          <P.MenuLink
            to="/firma"
            activeStyle
            onMouseOver={props.HoverOn}
            onMouseLeave={props.LeaveHover}
          >
            O nas
          </P.MenuLink>
          <P.MenuLink
            to="/cennik"
            activeStyle
            onMouseOver={props.HoverOn}
            onMouseLeave={props.LeaveHover}
          >
            Cennik
          </P.MenuLink>
          <P.MenuLink
            to="/kontakt"
            activeStyle
            onMouseOver={props.HoverOn}
            onMouseLeave={props.LeaveHover}
          >
            Kontakt
          </P.MenuLink>
        </P.Menu>
      </P.PrimaryNav>
    </>
  );
}

export default Navbar;
