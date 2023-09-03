import styled from "styled-components";
import { blackColor } from "../../utils/utils";
import { NavLink as Link } from "react-router-dom";

export const WrapperTrainings = styled.div`
  display: flex;
  position: relative;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    margin: 0 80px;
  }

  @media screen and (max-width: 700px) {
    margin: 0 20px;
  }
`;

export const TrainingBox = styled.div`
  display: block;

  @media screen and (max-width: 1200px) {
    font-size: 0.5rem;
    display: flex;
    flex-direction: column;
  }
`;

export const TrainingOffer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0 20px 0;
`;

export const TrainingParagraph = styled.p`
  font-size: 1.9rem;
  width: 70%;
  font-family: "Poppins", sans-serif;
  line-height: 1.2;
  font-weight: 600;
  line-break: strict;

  @media screen and (max-width: 1200px) {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
`;

export const HorizontalLine = styled.hr`
  color: ${blackColor};
`;

export const TrainingText = styled.p`
  font-size: 1.2rem;
  font-family: "Alegreya Regular400", sans-serif;
  line-height: 1.2;
  font-weight: normal;
`;

export const TrainingHyperlink = styled(Link)`
  display: block;
  border: none;
  background-color: #6c8fac;
  padding: 14px 28px;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  &:hover {
    box-shadow: 1px 1px 24px -8px rgba(27, 27, 29, 1);
    background: #47b5ff;
  }
`;
