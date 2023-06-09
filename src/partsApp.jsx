import styled from "styled-components";
import { blackColor } from "./utils/utils";

export const AppState = styled.div`
  min-height: 1000px;
`;

export const ShortContact = styled.div`
  background-color: ${blackColor};
  height: 50px;
  display: flex;
`;

export const Text = styled.div`
  color: white;
  font-weight: 300;
  padding: 16px 50px;
  font-size: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 0.9rem;
    padding: 5px;
  }
`;

export const Footer = styled.div`
  padding: 10px;
  margin-top: 35px;
  text-align: center;
  box-shadow: 0 4px 4px 3px rgba(0, 0, 0, 0.2);
  font-family: "Alegreya Regular400", sans-serif;
  color: ${blackColor};
  font-size: 0.9rem;
`;
