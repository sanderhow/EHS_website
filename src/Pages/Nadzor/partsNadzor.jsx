import styled from 'styled-components'
import { blackColor } from '../../utils/utils'


export const ParallaxWrapper = styled.div`
    height: 400px;
    /* overflow-x: hidden;
    overflow-y: auto; */
    perspective: 1px;
    position: relative;
    display: flex;
    justify-content: center;
`

export const ParallaxLayer1 = styled.div`
    position: absolute;
    width: 100%;
    min-height: 330px;
    background-image: url('assets/nadzor.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
`

export const ParallaxLayer2 = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    height: 300px;
`

export const ControlHeader = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 4.1rem;
    position: relative;
    margin: 0;
    color: white;
`

export const Outsourcing = styled.div`
    position: relative;
    display: block;
    margin: 0 10%;
    `
export const OutsourcingHeader = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 2.1rem;
    
    `
export const OutsourcingText = styled.p`
    font-family: "Alegreya Regular400", sans-serif;
    font-size: 1.2rem;
`

export const WrapperOutsourcingOffer = styled.div`
    height: 700px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 0 10%;
    @media screen and (max-width: 700px) {
      font-size: 0.5rem;
      display: block;
      flex-direction: column;
      justify-content: center;
      left: 0%;
    } 
`
export const LeftContainerOutsourcingOffer = styled.div`
    width: 50%;
    margin-right: 40px;
`
export const LeftContainerHeader = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 1.9rem;
    height: 114px;
`
export const LeftContainerParagraph = styled.p`
    font-family: "Alegreya Regular400", sans-serif;
    font-size: 1.2rem;
`

export const RightContainerOutsourcingOffer = styled.div`
    width: 50%;

`
// export const RightContainerHeader = styled.h3`
//     font-family: 'Poppins', sans-serif;
//     font-size: 1.9rem;
//     height: 150px;
// `
// export const RightContainerParagraph = styled.p`
//     font-family: "Alegreya Regular400", sans-serif;
// `

export const RightContainerUndorderedList = styled.ul`
    font-family: 'Poppins', sans-serif;
    font-size: 1.9rem;
    font-weight: bold;
    padding-left: 0px;
`

export const RightContainerList = styled.li`
    font-family: "Alegreya Regular400", sans-serif;
    font-size: 1.2rem;
    font-weight: normal;
`