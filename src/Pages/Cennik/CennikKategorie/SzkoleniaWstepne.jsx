import React from "react";
import * as P from "./partsCennikKategorie";
// import SzkoleniaO from './partsSzkoleniaOkresowe';

function SzkoleniaWstepne() {
  return (
    <>
      {/* <P.TrainingWrapper> */}
      <P.PriceCardTitle>
        <P.PriceCardHeader>Administracyjne</P.PriceCardHeader>
      </P.PriceCardTitle>
      <P.PriceCardWrapper>
        <P.Card>
          <P.CardHeader3>Administracyjne stacjonarne</P.CardHeader3>
          <P.CardHeader1>od 70zł</P.CardHeader1>
          <P.CardParagraph>Do 15 osób</P.CardParagraph>
          <P.CardButton>Zamawiam</P.CardButton>
        </P.Card>
        <P.Card>
          <P.CardHeader3>Administracyjne on-line</P.CardHeader3>
          <P.CardHeader1>od 60zł</P.CardHeader1>
          <P.CardParagraph>Do 7 osób</P.CardParagraph>
          <P.CardButton>Zamawiam</P.CardButton>
        </P.Card>
      </P.PriceCardWrapper>

      <P.PriceCardTitle>
        <P.PriceCardHeader>Robotnicze</P.PriceCardHeader>
      </P.PriceCardTitle>

      <P.PriceCardWrapper>
        <P.Card>
          <P.CardHeader3>Robotnicze stacjonarne</P.CardHeader3>
          <P.CardHeader1>od 70zł</P.CardHeader1>
          <P.CardParagraph>1-5 osób</P.CardParagraph>
          <P.CardButton>Zamawiam</P.CardButton>
        </P.Card>
        <P.Card>
          <P.CardHeader3>Robotnicze stacjonarne</P.CardHeader3>
          <P.CardHeader1>od 60zł</P.CardHeader1>
          <P.CardParagraph>6-10 osób</P.CardParagraph>
          <P.CardButton>Zamawiam</P.CardButton>
        </P.Card>
        <P.Card>
          <P.CardHeader3>Robotnicze stacjonarne</P.CardHeader3>
          <P.CardHeader1>od 50zł</P.CardHeader1>
          <P.CardParagraph>11 osób i więcej</P.CardParagraph>
          <P.CardButton>Zamawiam</P.CardButton>
        </P.Card>
      </P.PriceCardWrapper>

      <P.PriceCardTitle>
        <P.PriceCardHeader>Kierownicze</P.PriceCardHeader>
      </P.PriceCardTitle>

      <P.PriceCardWrapper>
        <P.Card>
          <P.CardHeader3>Kierownicze stacjonarne</P.CardHeader3>
          <P.CardHeader1>od 90zł</P.CardHeader1>
          <P.CardParagraph>Do 10 osób</P.CardParagraph>
          <P.CardButton>Zamawiam</P.CardButton>
        </P.Card>
        <P.Card>
          <P.CardHeader3>Kierownicze on-line</P.CardHeader3>
          <P.CardHeader1>od 80zł</P.CardHeader1>
          <P.CardParagraph>Do 5 osób</P.CardParagraph>
          <P.CardButton>Zamawiam</P.CardButton>
        </P.Card>
      </P.PriceCardWrapper>
      {/* // </P.TrainingWrapper> */}
    </>
  );
}
export default SzkoleniaWstepne;
