import React from 'react'
import * as P from "./partsStronaGlowna";

function StronaGlowna() {
  return (
  <P.Wrapper>
    <P.BackgroundImage/>
    <P.Header>
      Poprawa bezpieczeństwa wymaga przywództwa
    </P.Header>
    <P.OfferWrapper>
      <P.Offer>
        <P.OfferItem>
        <P.Avatar>
        <i class="fa-solid fa-hand-holding-hand"></i>
        </P.Avatar>
          Kompeksowa obsługa
        <P.OfferParagraph>
          Zapewniamy kompleksową obsługę BHP, począwszy od doradztwa w sp.prawa pracy, nadzóru oraz planu poprawy kultury i stanu bezpieczeństwa w Twojej firmie. 
        </P.OfferParagraph>
        </P.OfferItem>

        <P.OfferItem>
          <P.Avatar>
          <i class="fa-solid fa-star"></i>
          </P.Avatar>
            Gwarancja jakości
          <P.OfferParagraph>
            Posiadamy kilkunastoletnie
            doświadczenie w branzy, regularnie podnoszac swoje kwalifikacje, w oparciu o zmieniajace sie
            przepisy prawa i trendy na rynku. Wspolpracujemy z prawniakmi i certyfikowanymi labolatoriami.
          </P.OfferParagraph>
        </P.OfferItem>
        
        <P.OfferItem>
          <P.Avatar>
          <i class="fa-solid fa-envelope"></i>
          </P.Avatar>
            Zaufanie
          <P.OfferParagraph>
            Zapewniane usługi wykonywane sa na najwyzszym poziomie. 
            Do kazdego klienta podchodzimy indywidualnie. 
            Wspólnie ustalamy priorytety, strategie i plan dzialania, 
            dobrany do Twoich indywidualnych potrzeb.
          </P.OfferParagraph>
        </P.OfferItem>
      </P.Offer>
    </P.OfferWrapper>
  </P.Wrapper>
  )}

export default StronaGlowna;
