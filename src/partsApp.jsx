import styled from 'styled-components'
import { blackColor } from './utils/utils'

export const AppState = styled.div`

`

export const MainView = styled.div `  
  opacity: 0.2;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`

export const Footer = styled.div`
  padding: 10px;
  text-align: center;
  box-shadow: 0 4px 4px 3px rgba(0,0,0,.2);
  font-family: "Alegreya Regular400", sans-serif;
  color: ${blackColor};
  font-size: 0.9rem;
`
