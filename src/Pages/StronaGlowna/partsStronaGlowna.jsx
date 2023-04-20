import styled from 'styled-components'
import { blackColor, orangeColor, purpleColor } from '../../utils/utils'

export const Wrapper = styled.div`
    position: relative;
`

export const BackgroundImage = styled.img`
    background-image: url("./assets/stronaglowna.jpg");
    height: 100vh;
    width: 100%;
    /* opacity: 0.8;  */
    background-size: cover;
`

export const Header = styled.div`
    font-size: 5.2rem;
    font-weight: bold;
    color: white;
    font-family: 'Poppins', sans-serif;
    position: absolute;
    width: 300px;
    top: 100px;
    left: 20px;
    line-height: 1.2;

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

export const OfferWrapper = styled.div`
    background-size: cover;
`

export const Offer = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    padding-left: 0;

   
    @media screen and (max-width: 1024px) {
      font-size: 0.7rem;
      display: flex;
      align-items: center;
    }
    @media screen and (max-width: 700px) {
      font-size: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      left: 0%;
    }  
`

export const Avatar = styled.div`
    padding: 30px;
    font-size: 60px;
    color: ${orangeColor};
    transition: transform 1s ease-in;
`

export const OfferItem = styled.li`
    width: 200px;
    font-size: 1.4rem;
    color: ${blackColor};
    float: left;
    padding: 40px;
    text-align: center;
    font-family: 'Alegreya Sans', sans-serif;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    
    &:hover {
        ${Avatar} {
            transform: scale(1.5);
            color: ${purpleColor};
        }
    }

    @media screen and (max-width: 700px) {
        padding: 10px;
    }  
`

export const OfferParagraph = styled.p`
    font-size: 1.2rem;
    font-weight: normal;
`
