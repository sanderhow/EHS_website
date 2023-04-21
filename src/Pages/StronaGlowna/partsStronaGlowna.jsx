import styled from 'styled-components'
import { blackColor, orangeColor, purpleColor } from '../../utils/utils'

export const Wrapper = styled.div`
    position: relative;
`

export const BackgroundImage = styled.img`
    background-image: url("./assets/strona_glowna.jpg");
    height: 100vh;
    width: 100%;
    /* opacity: 0.8;  */
    background-size: cover;
`

export const Header = styled.div`
    font-size: 5.2rem;
    text-shadow: 1px 1px grey;
    font-weight: bold;
    color: white;
    font-family: 'Poppins', sans-serif;
    position: absolute;
    width: 300px;
    top: 100px;
    left: 100px;
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

export const WrapperDeclaration = styled.div`
    margin: 50px 0 0;
`

export const HeaderDeclaration = styled.h1`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 2.1rem;
`


export const ParagraphDeclaration = styled.p`
    text-align: center;
    font-family: "Alegreya Regular400", sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${blackColor};
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
    padding: 10px;
    font-size: 60px;
    color: #6c8fac;
    /* color: #E6343B; */
    transition: transform 1s ease-in;
`

export const OfferItem = styled.div`
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    width: 300px;
    font-size: 1.4rem;
    color: black;
    float: left;
    padding: 40px;
    margin: 50px 10px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    
    &:hover {
        ${Avatar} {
            transform: scale(1.5);
            color: #47B5FF;
        }
    }

    @media screen and (max-width: 700px) {
        padding: 10px;
    }  
`

export const OfferParagraph = styled.p`
    font-size: 1.1rem;
    font-weight: normal;
    font-family: "Alegreya Regular400", sans-serif;
`

export const CarouselTextWrapper = styled.div`
     /* height: 300px; */
     position: relative;
     width: 100%;
     margin: 0 100px;
`

export const CarouselItemHeder = styled.div`
    width: 100px;
    height: 100px;
    display: block;
    position: relative;
`

export const CarouselAvatar = styled.img`
    content: "";
    background-image: url("./assets/amazon.jpg");
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
`

export const CarouselItemParagraph = styled.div`
    /* width: 500px; */
    white-space: pre-wrap;
    text-align: center;
    font-size: 1.2rem;
    font-weight: normal;
    font-family: "Alegreya Regular400", sans-serif;
    line-height: 1.3;
    
`

export const CarouselItemSignature = styled.div`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    padding-top: 20px;
`