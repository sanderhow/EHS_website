import styled from 'styled-components';
import { blackColor, orangeColor } from '../../utils/utils';



export const PriceButtonsWrapper = styled.div`
    position: relative;
    display: flex;
    margin: 70px 0 0 50px;
    justify-content: center;
`
export const PriceButton = styled.button`
    background-color: ${blackColor};
    border: none;
    color: white;
    padding: 10px 32px;
    margin-right: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    background-color: ${(props) => props.isActive && "#E6343B"};
    &:active {
    color: #000000;
  }

    &:hover {
    color: white;
    background-color: #E6343B;
    /* border-radius: 30px; */
  }
`

export const PriceWrapperLaw = styled.div`
    width: 100%;
    position: relative;
`

export const PriceParagraphLaw = styled.p`
  font-family: "Alegreya Regular400", sans-serif;
  font-size: 1rem;
  color: grey;
  text-align: center;
`