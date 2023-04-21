import styled from 'styled-components';

export const Carousel = styled.div`
    overflow: hidden;
`

export const Inner = styled.div`
    white-space: nowrap;
    transition: transform 0.3s;
`

export const CarouselItem = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    background-color: #47B5FF;
    color: #fff;
    width: ${(props) => props.width};
`

export const Indicators = styled.div`
    display: flex;
    justify-content: center;
`

export const Button = styled.button`
    margin: 5px
`