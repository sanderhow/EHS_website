import React from "react";
import * as P from "././CennikKategorie/partsCennikKategorie";

function GlownaCennik() {
  return (
    <>
      <P.PriceCardTitle>
        <P.PriceCardHeader>Cennik</P.PriceCardHeader>
      </P.PriceCardTitle>
      <P.PriceCardWrapper>
        <P.Card>
          <P.CardHeader3>Postępowanie powypadkowe</P.CardHeader3>
          <P.CardHeader1>od 350zł</P.CardHeader1>
          <P.CardParagraph>1 szt.</P.CardParagraph>
          <P.CardButton>Zamawiam</P.CardButton>
        </P.Card>
        <P.Card>
          <P.CardHeader3>Instrukcja BHP</P.CardHeader3>
          <P.CardHeader1>od 80zł</P.CardHeader1>
          <P.CardParagraph>1 szt.</P.CardParagraph>
          <P.CardButton>Zamawiam</P.CardButton>
        </P.Card>
        <P.Card>
          <P.CardHeader3>Ocena ryzyka zawodowego</P.CardHeader3>
          <P.CardHeader1>od 110zł</P.CardHeader1>
          <P.CardParagraph>1 szt.</P.CardParagraph>
          <P.CardButton>Zamawiam</P.CardButton>
        </P.Card>
      </P.PriceCardWrapper>
      <P.PriceCardWrapper>
        <P.Card>
          <P.CardHeader3>Stały nadzór BHP</P.CardHeader3>
          <P.CardHeader1>od 330zł</P.CardHeader1>
          <P.CardParagraph>1 szt.</P.CardParagraph>
          <P.CardButton>Zamawiam</P.CardButton>
        </P.Card>
        <P.Card>
          <P.CardHeader3>Audyt BHP</P.CardHeader3>
          <P.CardHeader1>od 400zł</P.CardHeader1>
          <P.CardParagraph>miesięcznie</P.CardParagraph>
          <P.CardButton>Zamawiam</P.CardButton>
        </P.Card>
        <P.Card>
          <P.CardHeader3>Uśmiech i dobre słowo :)</P.CardHeader3>
          <P.CardHeader1>0 zł</P.CardHeader1>
          <P.CardParagraph></P.CardParagraph>
          <P.CardButton>Zamawiam</P.CardButton>
        </P.Card>
      </P.PriceCardWrapper>
    </>
  );
}

export default GlownaCennik;
