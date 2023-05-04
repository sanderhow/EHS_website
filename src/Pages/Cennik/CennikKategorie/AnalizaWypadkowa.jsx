import React from "react";
import * as P from "././partsCennikKategorie";

function AnalizaWypadkowa() {
  return (
    <>
      <P.PriceCardTitle>
        <P.PriceCardHeader>
          Warsztaty autorskie z analizy wypadków/ zdarzeń potencjalnie
          wypadkowych
        </P.PriceCardHeader>
      </P.PriceCardTitle>
      <P.PriceCardWrapper>
        <P.Card>
          <P.CardHeader3>Stacjonarne</P.CardHeader3>
          <P.CardHeader1>od 100zł</P.CardHeader1>
          <P.CardParagraph>Do 15 osób</P.CardParagraph>
          <P.CardButton>Zamawiam</P.CardButton>
        </P.Card>
        <P.Card>
          <P.CardHeader3>On-line</P.CardHeader3>
          <P.CardHeader1>od 90zł</P.CardHeader1>
          <P.CardParagraph>Do 7 osób</P.CardParagraph>
          <P.CardButton>Zamawiam</P.CardButton>
        </P.Card>
      </P.PriceCardWrapper>
    </>
  );
}
export default AnalizaWypadkowa;
