import styled from 'styled-components';
import { purpleColor } from '../../utils/utils';

export const WrapperContact = styled.div`
    position: relative;
    display: flex;
`
export const WrapperContactInfo = styled.div`
    width: 50%;
`

export const ContactHeader = styled.h3`
    font-size: 2.4rem;
    margin: 10% 30% 0 30%;
    font-family: 'Poppins', sans-serif;

`

export const ContactInfo = styled.div`
    font-size: 1.4rem;
    margin: 5% 30% 0 30%;
`
export const ContactInfoHolder = styled.div`
    position: relative;
    display: table;
    table-layout: fixed;
    height: auto;
    width: 100%;
    margin: 20px;
    font-family: "Alegreya Regular400", sans-serif;
`
export const ContactIcon = styled.div`
    position: relative;
    display: table-cell;
    width: 50px;
    font-size: 1.4rem;
    color: ${purpleColor};
`

export const ContactInfoElement = styled.p`
    position: relative;
    display: table-cell;
`

// export const Avatar = styled.div`
//     padding: 30px;
//     font-size: 60px;
//     transition: transform 1s ease-in;
// `

export const WrapperContactForm = styled.div`
    max-width: 1270px;
    margin-top: 5%;
`

// export const ContactForm = styled.div`
    
// `