import styled from 'styled-components';
import { css } from 'styled-components';

export const ServiceCardWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 500px;
`

export const TextWrapper = styled.div`
    width: 50%;
    background-color: rgb(71, 181, 255);
    text-align: center;
    color: white;
`

export const TextWrapper1 = styled.div`
    width: 50%;
    background-image: url("./assets/uslugi-background1.jpg");
    text-align: center;
    color: white;
`

export const Header = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    margin: 100px 80px 10px;
    @media screen and (max-width: 1200px) {
        line-height: 1.1;
        font-size: 1.8rem;
    }
`

export const Paragraph = styled.p`
    font-family: "Alegreya Regular400", sans-serif;
    font-size: 1.4rem;
    margin: 0;
    line-height: 1.4;
`

export const Hyperlink = styled.div`
    text-decoration: underline;
    font-size: 1.4rem;
    padding-top: 30px;
`

export const AvatarWrapper1 = styled.div`
    width: 50%;
    transform: translateX(100px);
    opacity: 0;
    ${(props) => props.isObserved && css`
        transform: translateX(0px);
        transition: 1s;
        opacity: 1;
    `
    };
`

export const AvatarWrapper2 = styled.div`
    width: 50%;
    transform: translateX(-100px);
    opacity: 0;
    ${(props) => props.isObserved && css`
        transform: translateX(0px);
        transition: 1s;
        opacity: 1;
    `
    };
`

export const AvatarUslugi = styled.img`
    width: 100%;
    height: 500px;
`

export const ServiceOfferWrapper = styled.div`
    width: 50%;
    line-height: 23px;
    position: relative;
    display: inline-block;
    @media screen and (max-width: 700px) {
        display: block;
        padding: 0;
        width: auto;
        margin: 0 20px;
    }   
`

export const ServiceOffer = styled.ul`
    padding: 0;
    font-size: 2.1rem;
    font-family: 'Poppins', sans-serif;
    @media screen and (max-width: 1200px) {
        line-height: 1;
        font-size: 1.8rem;
    }
`

export const ServiceList = styled.li`
    font-family: "Alegreya Regular400", sans-serif;
    font-size: 1.2rem;
    line-height: 1.4;
`
