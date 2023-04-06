import styled from 'styled-components'

export const ServicesWrapper = styled.div`
    position: relative;
`
export const Header = styled.h1`
    display: flex;
    justify-content: center;
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
    left: 20px;
    @media screen and (max-width: 700px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        padding: 0;
    }   
`

export const ServiceOffer = styled.ul`
    font-size: 1.7rem;
    left: 10px;
`

export const ServiceList = styled.li`
    

`

