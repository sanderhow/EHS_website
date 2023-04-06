import styled from 'styled-components'
import { blackColor, orangeColor } from '../../utils/utils'

export const WrapperTrainings = styled.div`
    display: flex;
    position: relative;
`

export const TrainingBox = styled.div`
    
`

export const TrainingOffer = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 0 20px 0;
`
export const TrainingParagraph = styled.p`
    font-size: 1.3rem;
    width: 50%;
    font-family: 'Lora Bold700', serif;
    font-weight: 600;
    line-break: strict;
`

export const HorizontalLine = styled.hr`
    color: ${blackColor};

`

export const TrainingText = styled.p`
    font-size: 0.9rem;
    font-family: "Alegreya Regular400", sans-serif;
    line-height: 0.6cm;
    font-weight: normal;
`

export const TrainingButton = styled.button`
    display: block;
    width: 100%;
    border: none;
    background-color: ${orangeColor};
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;

    /* On mouse-over */
    &:hover {background: ${blackColor};}
`
