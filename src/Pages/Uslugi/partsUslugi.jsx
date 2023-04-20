import styled from 'styled-components';

export const ServicesWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.h1`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 2.1rem;
    margin-top: 40px;
    @media screen and (max-width: 1200px) {
        line-height: 1.1;
        font-size: 1.8rem;
    }
`

export const AvatarUslugi = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    padding: 15px 0 50px 0;
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


