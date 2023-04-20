import styled from 'styled-components';
import { beigeColor, orangeColor, purpleColor } from '../../utils/utils';

export const WrapperContact = styled.div`
    position: relative;
    display: flex;
    background: white;
    min-height: 1000px;
    @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
    }
`
export const WrapperContactInfo = styled.div`
    width: 50%;
    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const ContactHeader = styled.h3`
    font-size: 2.1rem;
    margin: 10% 30% 0 30%;
    font-family: 'Poppins', sans-serif;
    @media screen and (max-width: 1200px) {
        margin: 20px 5px 0 20px;
    }
`

export const ContactInfo = styled.div`
    margin: 5% 30% 0 30%;
    font-family: "Alegreya Regular400", sans-serif;
    font-size: 1.2rem;
    @media screen and (max-width: 1200px) {
        margin: 0 20px;
    }
`
export const ContactInfoHolder = styled.div`
    position: relative;
    display: table;
    table-layout: fixed;
    height: auto;
    width: 100%;
`
export const ContactIcon = styled.div`
    position: relative;
    display: table-cell;
    width: 35px;
    font-size: 1.2rem;
    color: ${purpleColor};
`

export const ContactInfoElement = styled.p`
    position: relative;
    display: table-cell;
    line-height: 1.8;
`

// export const Avatar = styled.div`
//     padding: 30px;
//     font-size: 60px;
//     transition: transform 1s ease-in;
// `

export const WrapperContactForm = styled.div`
    max-width: 1270px;
    /* margin-top: 5%; */
    @media screen and (max-width: 1200px) {
        margin: 20px 35px;   
    }
`

// export const ContactForm = styled.div`
    
// `