import styled from "styled-components";
import { blackColor } from "../../utils/utils";

export const Wrapper = styled.div`
  position: relative;
`;

export const BackgroundImage = styled.img`
  background-image: url("./assets/strona_glowna.jpg");
  height: 100vh;
  width: 100%;
  background-size: cover;
`;

export const Header = styled.div`
  font-size: 6.2rem;
  text-shadow: 0 20px 40px -25px rgba(#818181);
  font-weight: bold;
  color: white;
  font-family: "Poppins", sans-serif;
  position: absolute;
  width: 300px;
  top: 100px;
  left: 100px;
  line-height: 1.2;

  @media screen and (max-width: 1024px) {
    right: 40%;
    font-size: 4.2rem;
    left: 5%;
  }

  @media screen and (max-width: 700px) {
    font-size: 2.6rem;
    left: 10px;
  }
`;

export const WrapperDeclaration = styled.div`
  margin: 50px 0 0;

  @media screen and (max-width: 700px) {
    margin: 5px;
  }
`;

export const HeaderDeclaration = styled.h1`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 2.1rem;

  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const ParagraphDeclaration = styled.p`
  text-align: center;
  font-family: "Alegreya Regular400", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${blackColor};

  @media screen and (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

//Offer Icons Section//
export const OfferWrapper = styled.div`
  background-size: cover;
`;

export const Offer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding-left: 0;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  padding: 10px;
  font-size: 60px;
  color: #6c8fac;
  transition: transform 1s ease-in;
`;

export const OfferItem = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  font-size: 1.4rem;
  color: black;
  float: left;
  padding: 40px;
  margin: 50px 10px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 11px -4px 24px -13px rgba(99, 99, 107, 1);
    ${Avatar} {
      transform: scale(1.5);
      color: #47b5ff;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 10px;
    margin: 10px;
    font-size: 1.2rem;
  }
`;

export const OfferParagraph = styled.p`
  font-size: 1.2rem;
  font-weight: normal;
  font-family: "Alegreya Regular400", sans-serif;

  @media screen and (max-width: 1024px) {
    padding: 10px;
    font-size: 0.9rem;
  }
`;

// Trusted Clients Logos//

export const TrustedClients = styled.div`
  position: relative;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TrustedClientsHeader = styled.h1`
  font-size: 2.1rem;
  font-weight: 900;
  font-family: "Poppins", sans-serif;
  margin-left: 60px;

  @media screen and (max-width: 1024px) {
    margin: 50px 0 35px 0px;
    text-align: center;
    font-size: 1.5rem;
  }
`;

export const TrustedClientsLogos = styled.div`
  position: relative;
  margin-left: 110px;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

export const TrustedClientsLogo1 = styled.img`
  width: 210px;
  height: 60px;
  background: transparent;
  padding: 30px 15px;

  &:hover {
    transform: translateY(-20px);
    transition: 0.3s;
  }

  @media screen and (max-width: 1024px) {
    width: 190px;
    height: 40px;
    padding: 10px;
  }
`;

export const TrustedClientsLogo2 = styled.img`
  padding: 14px 15px;
  width: 175px;
  height: 120px;

  &:hover {
    transform: translateY(-20px);
    transition: 0.3s;
  }

  @media screen and (max-width: 1024px) {
    width: 145px;
    height: 80px;
    padding: 10px;
  }
`;

export const TrustedClientsLogo3 = styled.img`
  padding: 30px 15px 0;
  width: 165px;
  height: 140px;

  &:hover {
    transform: translateY(-20px);
    transition: 0.3s;
  }

  @media screen and (max-width: 1024px) {
    width: 130px;
    height: 100px;
    padding: 10px;
  }
`;

// Carousel Wrapper with Clients Recommendations//

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 100px;

  @media screen and (max-width: 1024px) {
    margin: 20px 60px;
  }
`;

export const CarouselAvatarWrapper = styled.div`
  display: block;
  position: relative;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    margin: 20px 60px;
  }
`;

export const CarouselItemParagraph = styled.div`
  white-space: pre-wrap;
  text-align: left;
  font-size: 1.2rem;
  font-weight: normal;
  font-family: "Alegreya Regular400", sans-serif;
  line-height: 1.3;
`;

export const CarouselAvatar = styled.img`
  padding: 14px 15px 30px;
  width: 175px;
  height: 120px;

  &:hover {
    transform: translateY(-20px);
    transition: 0.3s;
  }

  @media screen and (max-width: 1024px) {
    width: 145px;
    height: 80px;
    padding: 10px;
  }
`;

export const CarouselItemSignature = styled.div`
  text-align: left;
  font-weight: 800;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  padding-top: 20px;

  @media screen and (max-width: 1024px) {
    margin: 20px 0;
    white-space: pre-wrap;
    padding: 0;
    word-break: break-all;
  }
`;
