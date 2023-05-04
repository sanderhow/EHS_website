import styled from "styled-components";
import { css } from "styled-components";
import { NavLink as Link } from 'react-router-dom';

export const ServiceCardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 500px;

  @media screen and (max-width: 1200px) {
    height: 382px;
  }
  @media screen and (max-width: 702px) {
    height: 220px;
  }
`;

export const TextWrapper = styled.div`
  width: 50%;
  background-color: rgb(71, 181, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

export const TextWrapper1 = styled.div`
  width: 50%;
  background-image: url("./assets/uslugi-background1.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

export const Header = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 3.2rem;

  @media screen and (max-width: 1200px) {
    font-size: 2.1rem;  
  }

  @media screen and (max-width: 700px) {
    line-height: 1.1;
    font-size: 1.4rem;  
  }
`;

export const Paragraph = styled.p`
  font-family: "Alegreya Regular400", sans-serif;
  font-size: 1.2rem;
  margin: 0;
  line-height: 1.4;

  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }
`;

export const Hyperlink = styled(Link)`
  text-decoration: underline;
  font-size: 1.4rem;

  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }
`;

export const AvatarWrapper1 = styled.div`
  width: 50%;
  transform: translateX(100px);
  opacity: 0;
  ${(props) =>
    props.isObserved &&
    css`
      transform: translateX(0px);
      transition: 1s;
      opacity: 1;
    `};
`;

export const AvatarWrapper2 = styled.div`
  width: 50%;
  transform: translateX(-100px);
  opacity: 0;
  ${(props) =>
    props.isObserved &&
    css`
      transform: translateX(0px);
      transition: 1s;
      opacity: 1;
    `};
`;

export const AvatarUslugi = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;

  @media screen and (max-width: 1200px) {
    height: 382px;
  }

  @media screen and (max-width: 702px) {
    height: 220px;
  }
`;

export const ServiceOfferWrapper = styled.div`
  line-height: 23px;
  position: relative;
  display: inline-block;
  margin: 30px 100px 0 30px;
  
  @media screen and (max-width: 1200px) {
    display: block;
    padding: 0;
    width: auto;
    margin: 0 20px;
  }
`;

export const ServiceOffer = styled.ul`
  padding: 0;
  font-size: 2.1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  
  @media screen and (max-width: 700px) {
    line-height: 1.1;
  }
`;

export const ServiceList = styled.li`
  font-family: "Alegreya Regular400", sans-serif;
  font-size: 1.2rem;
  line-height: 1.4;
  white-space: pre-wrap;
  word-wrap: break-word;
`;
