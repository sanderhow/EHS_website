import styled from 'styled-components';
import { orangeColor, purpleColor } from '../../utils/utils';
import { css } from 'styled-components';

export const ContactFormContainer = styled.div`
    margin-left: auto; 
    margin-right: auto;
    max-width: 1170px;  
    ${props => props.wrapper && css`
        box-shadow: 0 0 20px 0 ${purpleColor};
        > * {
            padding: 1em; 
        }
        
        @media (min-width: 1200px) {
            display: grid; 
            margin: 20px 0 35px;
            grid-template-columns: 1fr 2fr; 
            > * {
                padding: 2em; 
            }
        }
    `}
`

// export const FormHeader = styled.h3`
//     color: ${purpleColor};
//     font-size: 1.9rem; 
//     text-align: center; 
//     @media (min-width: 700px) {
//         text-align: left; 
//     }
// `

export const Form = styled.form`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-gap: 20px; 
`

export const WrappedGrid = styled.div`
    ${props => props.full && css`
        grid-column: 1 / 3;
    `}
`

export const ContactLabel = styled.label`
     display: block; 
     font-family: "Alegreya Regular400", sans-serif;
     font-size: 1rem;
     padding-top: 20px;
`

export const Input = styled.input`
    border: 1px solid #E6343B; 
    padding: 1em; 
    width: 100%; 
    background-color: ${orangeColor};
`

export const TextArea = styled.textarea`
    border: 1px solid #E6343B; 
    background-color: ${orangeColor};
    padding: 1em; 
    width: 100%; 
`

export const StyledButton = styled.button`
    background: ${purpleColor};
    border: 0; 
    color: #fff; 
    padding: 1rem; 
    text-transform: uppercase; 
    /* width: 100%; */
    
    &:hover, &:focus {
        background: #B8161F;
        color: #fff; 
        outline: 0; 
        transition: background-color 2s ease-out; 
    }
`