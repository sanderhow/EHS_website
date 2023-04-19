import styled from 'styled-components';
import { blackColor } from '../../../utils/utils';

export const PriceCardWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    text-align: center;
    padding: 70px;
    margin: 0 25px 30px 20px;
`

export const CardHeader3 = styled.h3`

`

export const CardHeader1 = styled.h1`
    color: #E6343B; 
    font-size: 2.5rem;
`

export const CardParagraph = styled.p`
    font-family: "Alegreya Regular400", sans-serif;
    font-size: 1.2rem;
    color: grey;
`

export const CardButton = styled.button`
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
`

// .card button:hover {
//     opacity: 0.7;
//   }

export const PriceCardTitle = styled.div`
    margin: 40px 0 30px 50px;
`

export const PriceCardHeader = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 2.2rem;
    text-align: center;
`
