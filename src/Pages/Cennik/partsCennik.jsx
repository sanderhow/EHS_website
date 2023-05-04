import styled from "styled-components";
import { blackColor } from "../../utils/utils";

export const PriceButtonsWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 70px 0 0 50px;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    margin: 35px 55px;
  }
`;
export const PriceButton = styled.button`
  background-color: ${blackColor};
  border: none;
  color: white;
  padding: 10px 32px;
  margin-right: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  background-color: ${(props) => props.isActive && "#47B5FF"};
  &:active {
    color: #000000;
  }

  &:hover {
    color: white;
    background-color: #47b5ff;
  }

  @media screen and (max-width: 1200px) {
    margin: 2px;
  }
`;

export const PriceWrapperLaw = styled.div`
  width: 100%;
  position: relative;
`;

export const PriceParagraphLaw = styled.p`
  font-family: "Alegreya Regular400", sans-serif;
  font-size: 1rem;
  color: grey;
  text-align: center;
`;
