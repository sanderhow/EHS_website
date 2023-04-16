import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { orangeColor, purpleColor } from '../utils/utils'

export const PrimaryNav = styled.nav`
  z-index: 1;
  height: 110px;
  display: 100%;
  width: 100%;
  background: ${purpleColor};
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  font-size: 1.1rem;
  font-family: 'Alegreya Regular400', sans-serif;
  box-shadow: 0 4px 4px 0 rgba(0,0,0,.2); 
`

export const MenuLink = styled(Link)`
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;

  &:active {
    color: #000000;
  }

  &:hover {
    color: black;
    background-color: ${orangeColor};
    border-radius: 30px;
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

export const ListedMenu = styled.div`
  height: 300px;
  width: 450px;
  background-color: ${purpleColor};
  display: flex;
  justify-content: flex-start;
  top: ${(props) => props.y + 65}px;
  position: absolute;
  left: ${(props) => props.x - 330}px;
  border-radius: 0 0 15% 15%;
  box-shadow: 0 4px 4px 0 rgba(0,0,0,.2);
`

export const Hamburger = styled(FaBars)`
  display: none;
  color: #ffffff;
  size: 3rem;

  @media screen and (max-width: 1024px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }

  &:hover {
    color: black;
  }
`

export const ListedHamburgerMenu = styled.div`
  height: 300px;
  width: 450px;
  background-color: ${purpleColor};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 2px;
  top: 110px;
  position: absolute;
  left: 0;
  border-radius: 0 0 15% 15%;
  box-shadow: 0 4px 4px 0 rgba(0,0,0,.2);
`

export const Menu = styled.div`
  display: flex;
  padding: 20px;
  margin-right: 25px;
  
  @media screen and (max-width: 1024px) {
    display: none
  }
`

export const Logo = styled.img`
  border-radius: 50%;
  padding-left: 20px;
  width: 125px;
  height: 110px;
`