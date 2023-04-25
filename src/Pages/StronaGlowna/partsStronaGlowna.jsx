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
  font-size: 5.2rem;
  text-shadow: 1px 1px grey;
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
`;

export const HeaderDeclaration = styled.h1`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 2.1rem;
`;

export const ParagraphDeclaration = styled.p`
  text-align: center;
  font-family: "Alegreya Regular400", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${blackColor};
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
  /* color: #E6343B; */
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
    ${Avatar} {
      transform: scale(1.5);
      color: #47b5ff;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 10px;
    margin: 10px;
  }
`;

export const OfferParagraph = styled.p`
  font-size: 1.2rem;
  font-weight: normal;
  font-family: "Alegreya Regular400", sans-serif;

  @media screen and (max-width: 1024px) {
    padding: 10px;
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
  }
`;

export const TrustedClientsLogos = styled.div`
  position: relative;
  margin-left: 110px;
  margin-bottom: 60px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

export const TrustedClientsImage = styled.img`
  padding: 30px;
  width: 165px;
  height: 100px;
`;

export const TrustedClientsImage1 = styled.img`
  width: 210px;
  height: 60px;
  background: transparent;
  padding: 30px;
`;

export const TrustedClientsImage2 = styled.img`
  padding: 14px 30px;
  width: 165px;
  height: 130px;
`;

// Carousel Wrapper with Clients Recommendations//

export const CarouselTextWrapper = styled.div`
  /* height: 300px; */
  position: relative;
  width: 100%;
  margin: 0 100px;
`;

export const CarouselItemHeder = styled.div`
  width: 100px;
  height: 100px;
  display: block;
  position: relative;
  font-size: 2.2rem;
  font-weight: 900;
  justify-content: center;
`;

export const CarouselAvatar1 = styled.img`
  width: 200px;
  height: 70px;
  background: transparent;
  padding: 30px;
`;

export const CarouselAvatar2 = styled.img`
  width: 140px;
  height: 70px;
  background: transparent;
`;

export const CarouselAvatar3 = styled.img`
  width: 180px;
  height: 90px;
  background: transparent;
`;


export const CarouselItemParagraph = styled.div`
  white-space: pre-wrap;
  text-align: left;
  font-size: 1.2rem;
  font-weight: normal;
  font-family: "Alegreya Regular400", sans-serif;
  line-height: 1.3;
`;

export const CarouselItemSignature = styled.div`
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  padding-top: 20px;
`;
