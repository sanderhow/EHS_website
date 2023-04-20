import styled from 'styled-components';
import { blackColor } from '../../utils/utils';

export const ParallaxWrapperPrice = styled.div`
height: 300px;
perspective: 1px;
position: relative;
display: flex;
justify-content: center;
`

export const ParallaxLayer1Price = styled.div`
background-size: 100%;
position: absolute;
width: 100%;
min-height: 330px;
background-image: url(${(props) => props.src44});
background-size: cover;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
opacity: 70%;
@media screen and (max-width: 700px) {
    min-height: 280px;
}
`

export const ParallaxLayer2Price = styled.div`
display: flex;
align-items: center;
height: 300px;
`

export const ControlHeaderPrice = styled.h3`
font-family: 'Poppins', sans-serif;
font-size: 4.1rem;
position: relative;
margin: 0;
color: ${blackColor};
@media screen and (max-width: 700px) {
    text-align: center;
    font-size: 2.7rem;
}
`