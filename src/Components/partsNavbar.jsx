import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const PrimaryNav = styled.nav`
  z-index: 1;
  height: 110px;
  display: 100%;
  width: 100%;
  opacity: 95%;
  background-color: white;
  background-position: bottom;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  font-size: 1.1rem;
  font-family: 'Alegreya Regular400', sans-serif;
  box-shadow: 0 4px 4px 0 rgba(0,0,0,.2); 
`

export const MenuLink = styled(Link)`
  color: black;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 20px;
  height: 100%;

  &:active {
    color: #000000;
  }

  &:hover {
    color: white;
    background-color: #47b5ff;;
    border-radius: 0px;
  }
`

export const DropdownMenuLink = styled(Link)`
  color: black;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 30px;
  height: 100%;

  &:active {
    color: #000000;
  }

  &:hover {
    text-decoration: overline;
    text-decoration-color: #47b5ff;
    border-radius: 0px;
    position: relative;
    bottom: 10px;
    transition: 0.2s;
  }
`

export const OpacityElement = styled.div`
  background-color: black;
  z-index: -1;
  height: 100vh;
  width: 100%;
  opacity: 0.6; 
  background-size: cover;
  position: absolute;
  top: 110px;
  left: 0px;
`

export const DropdownMenu = styled.div`
  height: 160px;
  width: 850px;
  display: flex;
  justify-content: flex-start;
  top: 110px;
  position: absolute;
  left: ${(props) => props.x - 130}px;
  box-shadow: 0 4px 4px 0 rgba(0,0,0,.2);
  background-color: white;
  text-align: center;
`

export const HamburgerWrapper = styled.div`
  display: none;
  width: 100px;
  height: 100px;
  position: relative;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 1024px) {
    display: flex;
  }
`

export const Hamburger = styled(FaBars)`
  color: black;
  font-size: 1.9rem;
  z-index: -1;
`

export const ListedHamburgerMenu = styled.div`
  height: 300px;
  width: 450px;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 2px;
  top: 110px;
  position: absolute;
  border-radius: 0 0 0 20px;
  box-shadow: 0 4px 4px 0 rgba(0,0,0,.2);

  @media screen and (max-width: 1024px) {
    right: 0px;
  }
  
  @media screen and (max-width: 702px) {
    border-radius: 0 0 0 30px;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,.2);
    width: 100%;
  }
`

export const Menu = styled.div`
  display: flex;
  padding: 20px 20px;
  margin-right: 25px;
  
  @media screen and (max-width: 1024px) {
    display: none
  }
`

export const Logo = styled.img`
  border-radius: 50%;
  padding-left: 20px;
  width: 150px;
  height: 150px;
  
  @media screen and (max-width: 1024px) {
    width: 128px;
    height: 134px;
  }
`
