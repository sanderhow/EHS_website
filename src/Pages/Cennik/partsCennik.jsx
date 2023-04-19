import styled from 'styled-components';
import { blackColor, orangeColor } from '../../utils/utils';

export const ParallaxWrapperPrice = styled.div`
    height: 300px;
    perspective: 1px;
    position: relative;
    display: flex;
    justify-content: center;
`

export const ParallaxLayer1Price = styled.div`
    position: absolute;
    width: 100%;
    min-height: 330px;
    background-image: url('assets/cennik.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 70%;
    @media screen and (max-width: 700px) {
        min-height: 280px;
    }
`

export const ParallaxLayer2Price = styled.div`
    /* position: absolute; */
    display: flex;
    align-items: center;
    height: 300px;
`

export const ControlHeaderPrice = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 4.1rem;
    position: relative;
    margin: 0;
    color: ${blackColor};
    @media screen and (max-width: 700px) {
        text-align: center;
        font-size: 2.7rem;
    }
`

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
/* margin: 0 35px; */
text-align: center;
`