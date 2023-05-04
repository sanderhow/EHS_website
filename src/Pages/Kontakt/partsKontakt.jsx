import styled from "styled-components";

export const WrapperContact = styled.div`
  position: relative;
  display: flex;
  background: white;
  min-height: 1000px;
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const WrapperContactInfo = styled.div`
  width: 60%;

  @media screen and (max-width: 1200px) {
    width: auto;
    margin: 0px 10%;
  }
  @media screen and (max-width: 700px) {
    margin: 0px 5%;
  }
`;

export const ContactHeader = styled.h3`
  font-size: 3.1rem;
  margin: 10% 30% 0 30%;
  font-family: "Poppins", sans-serif;
  text-align: center;

  @media screen and (max-width: 1200px) {
    margin: 5% 0;
  }
  @media screen and (max-width: 700px) {
    font-size: 2.1rem;
  }
`;

export const ContactInfo = styled.div`
  margin: 5% 30% 0 30%;
  font-family: "Alegreya Regular400", sans-serif;
  font-size: 1.2rem;
  @media screen and (max-width: 1200px) {
    margin: 0 20px;
  }
  @media screen and (max-width: 700px) {
    margin: 0;
  }
`;

export const ContactInfoHolder = styled.div`
  position: relative;
  display: table;
  table-layout: fixed;
  height: auto;
  width: 100%;
  margin: 0 10%;

  @media screen and (max-width: 1200px) {
    margin: 0 20%;
  }
  @media screen and (max-width: 700px) {
    margin: 0 10%;
  }
`;

export const ContactIcon = styled.div`
  position: relative;
  display: table-cell;
  width: 35px;
  font-size: 1.2rem;
  color: #6c8fac;
`;

export const ContactInfoElement = styled.p`
  position: relative;
  display: table-cell;
  line-height: 1.8;
`;


export const WrapperContactForm = styled.div`
  max-width: 1270px;

  @media screen and (max-width: 1200px) {
    margin: 20px 35px;
  }
`;

