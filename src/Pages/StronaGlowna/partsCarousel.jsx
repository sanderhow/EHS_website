import styled from "styled-components";

export const Carousel = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`;

export const CarouselItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  background-color: #47b5ff;
  color: #fff;
  width: ${(props) => props.width};
  margin-top: 20px;

  @media screen and (max-width: 1024px) {
    height: 500px;
  }
`;

export const Indicators = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 7%;
  left: 45%;

  @media screen and (max-width: 500px) {
    bottom: 2%;
    left: 30%;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  margin: 5px;
  border: none;
  color: white;
  padding: 3px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
