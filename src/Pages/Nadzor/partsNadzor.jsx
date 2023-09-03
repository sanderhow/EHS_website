import styled from "styled-components";

export const Outsourcing = styled.div`
  position: relative;
  display: block;
  margin: 5% 10% 0;

  @media screen and (max-width: 1200px) {
    text-align: center;
    margin: 0 20px;
  }
`;

export const OutsourcingHeader = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 2.1rem;
`;

export const OutsourcingText = styled.p`
  font-family: "Alegreya Regular400", sans-serif;
  font-size: 1.2rem;
  line-height: 1.2;

  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }
`;

export const WrapperOutsourcingOffer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0 10%;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0 20px;
  }
`;

export const LeftContainerOutsourcingOffer = styled.div`
  width: 50%;
  margin-right: 30px;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const LeftContainerHeader = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 2.1rem;
  line-height: 1.2;
`;

export const LeftContainerParagraph = styled.p`
  font-family: "Alegreya Regular400", sans-serif;
  font-size: 1.2rem;

  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }
`;

export const RightContainerOutsourcingOffer = styled.div`
  width: 50%;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const RightContainerUndorderedList = styled.ul`
  font-family: "Poppins", sans-serif;
  font-size: 2.1rem;
  font-weight: bold;
  padding-left: 0px;
  line-height: 1.2;
`;

export const RightContainerList = styled.li`
  font-family: "Alegreya Regular400", sans-serif;
  font-size: 1.2rem;
  font-weight: normal;
  list-style: none;

  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }
`;
