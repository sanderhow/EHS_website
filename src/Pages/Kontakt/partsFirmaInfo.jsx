import styled from 'styled-components';
import { purpleColor } from '../../utils/utils';

export const WrapperCompanyInfo = styled.div`
    background: ${purpleColor};
    padding: 10px;
    width: 100%;
` 

export const CompanyName = styled.h3`
    margin: 0 0 1rem 0;
    text-align: center;
    color: #fff; 
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    @media (min-width: 700px) {
    text-align: left; 
    }
`

export const WrapperList = styled.ul`
    list-style: none;
    margin:0 0 1rem 0;
    padding:0;
    text-align: center;
    font-family: "Alegreya Regular400", sans-serif;
    font-size: 1rem;
    line-height: 1.4;
    @media (min-width: 700px) {
    text-align: left; 
    }
`

