import styled from 'styled-components'
import { blackColor } from './utils/utils'

export const AppState = styled.div`
  min-height: 1000px;
`

export const MainView = styled.div `  
  opacity: 0.2;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  @media screen and (max-width: 1024px) {
    right: 40%;
    font-size: 4rem;
    left: 5%;
    }
  @media screen and (max-width: 700px) {
    font-size: 3rem;
    right: 40%;
    left: 5%;
    }
`

export const Footer = styled.div`
  padding: 10px;
  margin-top: 35px;
  text-align: center;
  box-shadow: 0 4px 4px 3px rgba(0,0,0,.2);
  font-family: "Alegreya Regular400", sans-serif;
  color: ${blackColor};
  font-size: 0.9rem;
`
